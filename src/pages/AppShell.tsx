import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar/Navbar'
import styles from './AppShell.module.css'


function AppShell() {
    return (
        <main className={styles.containerLayout}>
            <NavBar />
            <Outlet />
        </main>
    )
}

export default AppShell