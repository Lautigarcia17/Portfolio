import { useEffect, useRef, useState } from 'react';
import styles from './Layout.module.css'; // Asegúrate de que los estilos estén configurados correctamente
import WelcomeSection from './Layout/WelcomeSection/WelcomeSection';
import AboutMe from './Layout/AboutMe/AboutMe';
import Projects from './Layout/Projects/Projects';
import Contact from './Layout/Contact/Contact';
import SectionIndicator from '../components/SectionIndicator/SectionIndicator';
import NavBar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';


const Layout = () => {
    const [visibleSection, setVisibleSection] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLElement>(null);
    const welcomeRef = useRef<HTMLElement>(null);
    const aboutMeRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = document.querySelector(`.${styles.containerLayout}`) as HTMLElement;

        if (!container) return;

        const handleWheel = (event: WheelEvent) => {
            if (event.ctrlKey || event.metaKey) return;

            event.preventDefault();
            const delta = event.deltaY;

            container.scrollBy({
                top: delta * 0.1,
                behavior: 'smooth'
            });
        };

        const handleScroll = () => {
            const sections = Array.from(document.querySelectorAll('section'));
            let newVisibleSection: string | null = null;

            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.1 && rect.bottom >= window.innerHeight * 0.5) {
                    newVisibleSection = section.id;
                    break;
                }
            }

            if (newVisibleSection !== visibleSection && newVisibleSection) {
                setVisibleSection(newVisibleSection);
            }
        };


        container.addEventListener('wheel', handleWheel);
        container.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('scroll', handleScroll);
        };
    }, [visibleSection]);



    const handleScrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
        if (sectionRef.current && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <main className={styles.containerLayout} ref={scrollContainerRef}>
            <NavBar scrollContainerRef={scrollContainerRef} welcomeRef={welcomeRef} visibleSection={visibleSection} />
            <SectionIndicator currentSection={visibleSection} handleScrollToSection={handleScrollToSection} welcomeRef={welcomeRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} contactRef={contactRef}/>
            <section id="welcome" className={styles.sectionLayout} aria-hidden={visibleSection !== 'welcome' ? 'true' : 'false'} ref={welcomeRef}>
                <WelcomeSection />
            </section>
            <section id="aboutMe" className={styles.sectionLayout} aria-hidden={visibleSection !== 'aboutMe' ? 'true' : 'false'} ref={aboutMeRef}>
                <AboutMe />
            </section>
            <section id="projects" className={styles.sectionLayout} aria-hidden={visibleSection !== 'projects' ? 'true' : 'false'} ref={projectsRef}>
                <Projects />
            </section>
            <section id="contact" className={styles.sectionLayout} aria-hidden={visibleSection !== 'contact' ? 'true' : 'false'} ref={contactRef}>
                <Contact />
            </section>
            <Toaster />
        </main>
    );
};

export default Layout;