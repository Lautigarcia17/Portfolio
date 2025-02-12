import styles from './Navbar.module.css'

function NavBar({ scrollContainerRef, welcomeRef, visibleSection }: any) {



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

    const getName = () => {
        if (visibleSection === 'welcome') return "Lautaro Nahuel Garcia";
        if (visibleSection === 'aboutMe' || visibleSection === 'projects' || visibleSection === 'contact') return "LNG";
        return "Lautaro Nahuel Garcia";
    };

    const getNameColor = () => {
        switch (visibleSection) {
          case 'welcome': return '#ffe557';
          case 'aboutMe': return 'red';
          case 'projects': return 'blue';
          case 'contact': return 'pink';
          default: return '#ffe557';
        }
      };

    return (
        <header className={`${styles.contentNavbar}`}>
            <button className={styles.btnNav} onClick={() => scrollToSection(welcomeRef)}>
                <p style={{color: getNameColor()}}>{getName()}</p>
            </button>
        </header>
    );
}


export default NavBar