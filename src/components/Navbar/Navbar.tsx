import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from './Navbar.module.css'

function NavBar() {
    const location = useLocation();
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('welcome');
    
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            const sections = ['welcome', 'about', 'work', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const sections = [
        { id: 'welcome', label: 'HOME', icon: '◆' },
        { id: 'about', label: 'ABOUT', icon: '◇' },
        { id: 'work', label: 'WORK', icon: '◈' },
        { id: 'contact', label: 'CONTACT', icon: '◉' }
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