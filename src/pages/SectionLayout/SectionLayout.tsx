import { motion, AnimatePresence } from 'framer-motion';
import styles from './SectionLayout.module.css';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import { Toaster } from 'react-hot-toast';
import MyWork from './MyWork/MyWork';
import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';


function SectionLayout() {
    const navContext = useContext(NavigationContext);
    
    if (!navContext) {
        throw new Error('SectionLayout must be used within NavigationProvider');
    }

    const { currentSection } = navContext;

    const pageVariants = {
        initial: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        animate: { 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1]
            }
        },
        exit: { 
            opacity: 0, 
            scale: 1.05,
            filter: 'blur(10px)',
            transition: {
                duration: 0.3,
                ease: [0.83, 0, 0.17, 1]
            }
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <AnimatePresence mode="wait">
                {currentSection === 'welcome' && (
                    <motion.section
                        key="welcome"
                        className={styles.sectionLayout}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <WelcomeSection />
                    </motion.section>
                )}
                {currentSection === 'about' && (
                    <motion.section
                        key="about"
                        className={styles.sectionLayout}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <AboutMe />
                    </motion.section>
                )}
                {currentSection === 'work' && (
                    <motion.section
                        key="work"
                        className={styles.sectionLayout}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <MyWork />
                    </motion.section>
                )}
                {currentSection === 'contact' && (
                    <motion.section
                        key="contact"
                        className={styles.sectionLayout}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Contact />
                    </motion.section>
                )}
            </AnimatePresence>
            <Toaster /> 
        </div>
    );
};

export default SectionLayout;