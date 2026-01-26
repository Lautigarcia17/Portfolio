import { Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import styles from './NotFound.module.css'



function NotFound() {
    const { translations } = useLanguage();

    return (
        <>
            <div className={styles.containerNotFound}>
                <div className={styles.contentNotFound}>
                    <div className={styles.textNotFound}>

                        <h1>{translations.notFound.title}</h1>
                        <h2>{translations.notFound.message} <Link to='/' className={styles.linkToBack}>{translations.notFound.backToHome}</Link></h2>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NotFound