import { createContext, useState, ReactNode, useEffect } from 'react';
import { es, en, Translations } from '../i18n';

type Language = 'es' | 'en';

export interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  });

  const translations = language === 'es' ? es : en;

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'es' ? 'en' : 'es');
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
