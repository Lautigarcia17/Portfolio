import  { useEffect, useRef, useState } from 'react';
import styles from './Layout.module.css'; // Asegúrate de que los estilos estén configurados correctamente
import WelcomeSection from './Layout/WelcomeSection/WelcomeSection';
import AboutMe from './Layout/AboutMe/AboutMe';
import Projects from './Layout/Projects/Projects';
import Contact from './Layout/Contact/Contact';
import SectionIndicator from '../components/SectionIndicator/SectionIndicator';
import NavBar from '../components/Navbar/Navbar';


const Layout = () => {
    const [visibleSection, setVisibleSection] = useState<string | null>(null);
    const scrollContainerRef = useRef(null);
    const welcomeRef = useRef(null);

    useEffect(() => {
        const container = document.querySelector(`.${styles.containerLayout}`) as HTMLElement;

        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();
            const delta = event.deltaY;

            container.scrollBy({
                top: delta * 0.1,
                behavior: 'smooth'
            });
        };

        container?.addEventListener('wheel', handleScroll);

        return () => {
            container?.removeEventListener('wheel', handleScroll);
        };
    }, []);

    useEffect(() => {
        const container = document.querySelector(`.${styles.containerLayout}`) as HTMLElement;
    
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
    
        container?.addEventListener('scroll', handleScroll);
    
        handleScroll(); 
    
        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, [visibleSection]);


    return (
        <main className={styles.containerLayout} ref={scrollContainerRef}>
            <NavBar scrollContainerRef={scrollContainerRef} welcomeRef={welcomeRef} visibleSection={visibleSection}/>
            <SectionIndicator currentSection={visibleSection}/>
            <section id="welcome" className={styles.sectionLayout} aria-hidden={visibleSection !== 'welcome' ? 'true' : 'false'} ref={welcomeRef}>
                <WelcomeSection />
            </section>
            <section id="aboutMe" className={styles.sectionLayout} aria-hidden={visibleSection !== 'aboutMe' ? 'true' : 'false'} >
                <AboutMe />
            </section>
            <section id="projects" className={styles.sectionLayout} aria-hidden={visibleSection !== 'projects' ? 'true' : 'false'} >
                <Projects />
            </section>
            <section id="contact" className={styles.sectionLayout} aria-hidden={visibleSection !== 'contact' ? 'true' : 'false'} >
                <Contact />
            </section>
        </main>
    );
};

export default Layout;