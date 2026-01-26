import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './SectionLayout.module.css';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import AboutMe from './AboutMe/AboutMe';

import { Toaster } from 'react-hot-toast';
import MyWork from './MyWork/MyWork';
import Contact from './Contact/Contact';


function SectionLayout() {
    const [activeSection, setActiveSection] = useState('welcome');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['welcome', 'about', 'work', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

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
        handleScroll(); // Initial check
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1]
            }
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <motion.section
                id="welcome"
                className={styles.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <WelcomeSection />
            </motion.section>

            <motion.section
                id="about"
                className={styles.section}
                initial={false}
            >
                <AboutMe />
            </motion.section>

            <motion.section
                id="work"
                className={styles.section}
                initial={false}
            >
                <MyWork />
            </motion.section>

            <motion.section
                id="contact"
                className={styles.section}
                initial={false}
            >
                <Contact />
            </motion.section>

            <Toaster /> 
        </div>
    );
};

export default SectionLayout;