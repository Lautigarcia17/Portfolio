import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

function NavBar({scrollContainerRef,aboutMeRef,projectsRef,contactRef} : any){
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

    const scrollToSection = (ref : any) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div className={`${styles.content}`}>
            <div className={`${styles.elements} ${isScrolled ? styles.backgroundNavbarSolid : styles.backgroundNavbarTransparent}`}>
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