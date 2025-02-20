export interface SectionIndicatorProps {
    currentSection: string | null;
    handleScrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
    welcomeRef: React.RefObject<HTMLElement>;
    aboutMeRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
  }