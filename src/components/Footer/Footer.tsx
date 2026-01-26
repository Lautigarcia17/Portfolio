import { useLanguage } from '../../hooks/useLanguage'
import styles from './Footer.module.css'




function Footer() {
    const { translations, language } = useLanguage();
    const currentDate = new Date();

    const handleRedirect = (url: string) => {
        window.open(url);
    }

    return (<>

        <footer className={styles.footer}>
            <div className={styles.iconContainer}>
                <svg onClick={() => handleRedirect('https://www.linkedin.com/in/lautarongarcia/')} className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></g></svg>
                <svg onClick={() => handleRedirect('https://github.com/Lautigarcia17')} className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#fdb500"><path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568" /><path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22" /></g></svg>
                <a href="mailto:lautaronhgarcia@gmail.com">
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffffff"><path d="M6.412 7.584C5.36 9.044 5 10.827 5 12c0 1.173.36 2.956 1.412 4.416C7.426 17.825 9.126 19 12 19c1.98 0 3.385-.558 4.388-1.334a1 1 0 1 1 1.224 1.581C16.229 20.317 14.385 21 12 21c-3.526 0-5.826-1.491-7.212-3.416C3.44 15.711 3 13.494 3 12c0-1.493.44-3.711 1.788-5.584C6.174 4.492 8.474 3 12 3s5.826 1.492 7.212 3.416C20.56 8.289 21 10.506 21 12a3.79 3.79 0 0 1-.689 2.147c-.56.778-1.485 1.353-2.811 1.353c-1.326 0-2.251-.575-2.812-1.353A3.791 3.791 0 0 1 14 12a1 1 0 1 1 2 0c0 .257.085.664.311.978c.19.264.515.522 1.189.522s.999-.258 1.189-.522c.226-.314.311-.721.311-.978c0-1.173-.36-2.956-1.412-4.416C16.575 6.175 14.874 5 12 5S7.426 6.175 6.412 7.584z" /><path d="M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0z" /></g></svg>
                </a>
            </div>

            <div>
                <p className={styles.symbolName}>&copy;</p>
                <p className={styles.name}> Lautaro Nahuel Garcia {currentDate.getUTCFullYear()}</p>

            </div>
           

            <div>
                <p className={styles.message}>{language === 'es' ? 'Gracias por pasarte por aquí.' : 'Thanks for stopping by.'}</p>

            </div>
         
        </footer>
    </>)
}


export default Footer