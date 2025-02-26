import styles from './SectionLayout.module.css';
import WelcomeSection from './WelcomeSection/WelcomeSection';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import SectionIndicator from '../../components/SectionIndicator/SectionIndicator';
import { Toaster } from 'react-hot-toast';
import MyWork from './MyWork/MyWork';
import { useGenericContext } from '../../hooks/useGenericContext';
import { ScrollContext } from '../../context/ScrollContext';


function SectionLayout() {

    const { visibleSection, isResponsive, handleScrollToSection, welcomeRef, aboutMeRef, projectsRef, contactRef } = useGenericContext(ScrollContext);

    return (
        <>
            {!isResponsive && <SectionIndicator currentSection={visibleSection} handleScrollToSection={handleScrollToSection} welcomeRef={welcomeRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} contactRef={contactRef}/>}
            <section id="welcome" className={styles.sectionLayout} aria-hidden={visibleSection !== 'welcome' ? 'true' : 'false'} ref={welcomeRef}>
                <WelcomeSection />
            </section>
            <section id="aboutMe" className={styles.sectionLayout} aria-hidden={visibleSection !== 'aboutMe' ? 'true' : 'false'} ref={aboutMeRef}>
                <AboutMe />
            </section>
            <section id="myWork" className={styles.sectionLayout} aria-hidden={visibleSection !== 'myWork' ? 'true' : 'false'} ref={projectsRef}>
                <MyWork />
            </section>
            <section id="contact" className={styles.sectionLayout} aria-hidden={visibleSection !== 'contact' ? 'true' : 'false'} ref={contactRef}>
                <Contact />
            </section>

            <Toaster /> 
        </>
    );
};

export default SectionLayout;