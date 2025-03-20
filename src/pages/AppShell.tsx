import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar/Navbar'
import styles from './AppShell.module.css'
import { ScrollContext } from '../context/ScrollContext';
import { useGenericContext } from '../hooks/useGenericContext';


function AppShell() {

    const { scrollContainerRef, visibleSection, welcomeRef, isResponsive } = useGenericContext(ScrollContext);

    return (
        <main className={styles.containerLayout} ref={scrollContainerRef}>
            <NavBar scrollContainerRef={scrollContainerRef} welcomeRef={welcomeRef} visibleSection={visibleSection} isResponsive={isResponsive} />
            <Outlet />
        </main>
    )

}

export default AppShell