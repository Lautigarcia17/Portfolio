import { useRef } from "react";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection"
import NavBar from "../components/Navbar/Navbar"
import styles from "./Layout.module.css"
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects"
import AboutMe from "../components/AboutMe/AboutMe"

function Layout() {
    const scrollContainerRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);


  return (
    <div className={styles.container} ref={scrollContainerRef}>
        <div className={styles.content}>
            <div className={` ${styles.element} ${styles.navBar}`}>
                <NavBar scrollContainerRef={scrollContainerRef} aboutMeRef={aboutMeRef} projectsRef= {projectsRef} contactRef = {contactRef}/>
            </div>
            <div className={styles.element}>
                <WelcomeSection/>
            </div>
            <hr className={styles.lineSeparetor} />
            <div className={styles.element} ref={aboutMeRef}>
                <AboutMe />
            </div>
            <div className={styles.element} ref={projectsRef}>
                <Projects/>
            </div>
            <div className={styles.element} ref={contactRef}>
                <Contact />
            </div>
        </div>

    </div>
  )
}

export default Layout
