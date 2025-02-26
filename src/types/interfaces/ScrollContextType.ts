export interface ScrollContextType {
    scrollContainerRef: React.RefObject<HTMLElement>;
    visibleSection: string | null;
    isResponsive: boolean;
    welcomeRef: React.RefObject<HTMLElement>;
    aboutMeRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    handleScrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
}
