import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { NavigationContext, SectionType } from '../../context/NavigationContext';
import { motion } from "framer-motion";
import styles from './Navbar.module.css'

function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const navContext = useContext(NavigationContext);
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    
    const isHomePage = location.pathname === '/';
    const currentSection = navContext?.currentSection || 'welcome';

    const handleNavigation = (section: SectionType) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                navContext?.navigateToSection(section);
            }, 100);
        } else {
            navContext?.navigateToSection(section);
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
                onClick={() => handleNavigation('welcome')}
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
                        const isActive = currentSection === section.id;
                        const isHovered = hoveredSection === section.id;
                        
                        return (
                            <motion.button
                                key={section.id}
                                className={`${styles.navButton} ${isActive ? styles.active : ''}`}
                                onClick={() => handleNavigation(section.id as SectionType)}
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