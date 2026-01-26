import { createContext, useState, ReactNode } from 'react';

export type SectionType = 'welcome' | 'about' | 'work' | 'contact';

interface NavigationContextType {
  currentSection: SectionType;
  navigateToSection: (section: SectionType) => void;
  isTransitioning: boolean;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<SectionType>('welcome');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToSection = (section: SectionType) => {
    if (section === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Delay for cinematic transition
    setTimeout(() => {
      setCurrentSection(section);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 300);
  };

  return (
    <NavigationContext.Provider value={{ currentSection, navigateToSection, isTransitioning }}>
      {children}
    </NavigationContext.Provider>
  );
};
