import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../../hooks/useLanguage';
import styles from './Navbar.module.css'

function NavBar() {
    const location = useLocation();
    const { language, toggleLanguage, translations } = useLanguage();
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('welcome');
    
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (!isHomePage) return;

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ['welcome', 'about', 'work', 'contact'];
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [isHomePage]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const sections = [
        { id: 'welcome', label: translations.navbar.home.toUpperCase(), icon: '◈' },
        { id: 'about', label: translations.navbar.about.toUpperCase(), icon: '◈' },
        { id: 'work', label: translations.navbar.work.toUpperCase(), icon: '◈' },
        { id: 'contact', label: translations.navbar.contact.toUpperCase(), icon: '◈' }
    ];

    return (
        <header className={styles.navbar}>
            {/* Logo/Name with glitch effect */}
            <motion.button
                className={styles.logo}
                onClick={() => scrollToSection('welcome')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className={styles.logoText}>LNG</span>
                <motion.span 
                    className={styles.logoGlitch}
                    animate={{
                        opacity: [0, 1, 0],
                        x: [0, -2, 2, 0],
                    }}
                    transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        repeatDelay: 3,
                    }}
                >
                    LNG
                </motion.span>
            </motion.button>

            {/* Navigation Menu */}
            {isHomePage && (
                <nav className={styles.navMenu}>
                    {sections.map((section, index) => {
                        const isActive = activeSection === section.id;
                        const isHovered = hoveredSection === section.id;
                        
                        return (
                            <motion.button
                                key={section.id}
                                className={`${styles.navButton} ${isActive ? styles.active : ''}`}
                                onClick={() => scrollToSection(section.id)}
                                onMouseEnter={() => setHoveredSection(section.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <span className={styles.navIcon}>{section.icon}</span>
                                <span className={styles.navLabel}>{section.label}</span>
                                
                                {/* Active indicator */}
                                {isActive && (
                                    <motion.div
                                        className={styles.activeIndicator}
                                        layoutId="activeSection"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                
                                {/* Hover glow */}
                                {(isHovered || isActive) && (
                                    <motion.div
                                        className={styles.hoverGlow}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}

                    {/* Language Toggle */}
                    <motion.button
                        className={styles.langToggle}
                        onClick={toggleLanguage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                    >
                        <span className={styles.langText}>{language === 'es' ? 'ES' : 'EN'}</span>
                        <motion.div
                            className={styles.langGlow}
                            animate={{
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.button>
                </nav>
            )}

            {/* Decorative elements */}
            <div className={styles.navDecor}>
                <motion.div
                    className={styles.decorLine}
                    animate={{
                        scaleX: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </header>
    );
}

export default NavBar