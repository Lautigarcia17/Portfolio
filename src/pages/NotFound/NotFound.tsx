import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'



function NotFound() {

    return (
        <>
            <div className={styles.containerNotFound}>
                <div className={styles.contentNotFound}>
                    <div className={styles.textNotFound}>

                        <h1>Esta página no está disponible.</h1>
                        <h2>Es posible que el enlace que seleccionaste no funcione o que se haya eliminado la página. <Link to='/' className={styles.linkToBack}>Volver al portafolio</Link></h2>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NotFound