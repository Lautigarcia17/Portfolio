import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

function NavBar({scrollContainerRef,welcomeRef,aboutMeRef,projectsRef,contactRef} : any){
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(scrollContainerRef.current.scrollTop  > 20){
                setIsScrolled(true);
            }
            else{
                setIsScrolled(false);
            }
        }

        scrollContainerRef.current.addEventListener('scroll',handleScroll);

        return ()=>{
            scrollContainerRef.current.removeEventListener('scroll',handleScroll);
        }

    },[])

    const scrollToSection = (ref: any) => {
        const scrollContainer = scrollContainerRef.current;
        const offset = 50; 
      
        if (scrollContainer && ref?.current) {
            if (ref === welcomeRef) {
                scrollContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
            }
            else if (ref?.current) {
                const elementTop = ref.current.offsetTop;
                scrollContainer.scrollTo({
                  top: elementTop - offset,
                  behavior: 'smooth',
                });
            }
        }
      };

    return (
        <div className={`${styles.content}`}>
            <div className={`${styles.elements} ${isScrolled ? styles.backgroundNavbarSolid : styles.backgroundNavbarTransparent}`}>
                <button className={styles.btnNav} onClick={ ()=> scrollToSection(welcomeRef)}>
                    <p>Inicio</p>
                </button>
                <button className={styles.btnNav} onClick={ ()=> scrollToSection(aboutMeRef)}>
                    <p>Sobre mi</p>
                </button>
                <button className={styles.btnNav} onClick={ ()=> scrollToSection(projectsRef)}>
                    <p>Proyectos</p>
                </button>
                <button className={styles.btnNav} onClick={ ()=> scrollToSection(contactRef)}>
                    <p> Contacto</p>
                </button>
            </div>

        </div>
      );
}


export default NavBar