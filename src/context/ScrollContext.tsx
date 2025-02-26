import { createContext, useEffect, useRef, useState } from "react";
import { ScrollContextType } from "../types/interfaces/ScrollContextType";


export const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [visibleSection, setVisibleSection] = useState<string | null>(null);
    const [isResponsive, setIsResponsive] = useState<boolean>(false);
    const scrollContainerRef = useRef<HTMLElement>(null);
    const welcomeRef = useRef<HTMLElement>(null);
    const aboutMeRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;

        if (!container) return;

        const updateResponsiveness = () => {
            setIsResponsive(window.innerWidth <= 992);
        };

        const handleWheel = (event: WheelEvent) => {
            if (event.ctrlKey || event.metaKey) return;

            if (window.innerWidth > 992) {
                event.preventDefault();
                container.scrollBy({ top: event.deltaY * 0.1, behavior: "smooth" });
            }
        };

        const handleScroll = () => {
            const sections = Array.from(document.querySelectorAll("section"));
            let newVisibleSection: string | null = null;

            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.1 && rect.bottom >= window.innerHeight * 0.5) {
                    newVisibleSection = section.id;
                    break;
                }
            }

            if (newVisibleSection !== visibleSection) {
                setVisibleSection(newVisibleSection);
            }
        };

        container.addEventListener("wheel", handleWheel);
        container.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateResponsiveness);

        updateResponsiveness();
        handleScroll();

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateResponsiveness);
        };
    }, [visibleSection]);

    const handleScrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
        if (sectionRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <ScrollContext.Provider value={{ scrollContainerRef, visibleSection, isResponsive, welcomeRef, aboutMeRef, projectsRef, contactRef,handleScrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
};
