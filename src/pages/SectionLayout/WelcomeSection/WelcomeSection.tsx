import styles from './WelcomeSection.module.css'
import { Me } from '../../../assets/index'


function WelcomeSection() {


    const handleRedirect = (url: string) => {
        window.open(url);
    }

    const handlePdf = () => {
        window.open(`/LautaroNGarcia.pdf`, '_blank');
    }


    return (
        <>
            <div className={styles.containerWelcome}>
                <div className={styles.contentWelcome}>
                    <div className={styles.contentTop}>
                        <div className={styles.contentProfile}>
                            <div className={styles.textProfile}>
                                <div className={styles.decorationDoubleLine}></div>
                                <h2 className={styles.title}>Desarrollador <br /> Full-Stack</h2>
                                <h6 className={styles.text}>Apasionado por la creación y el diseño de experiencias web, siempre en busca de nuevas oportunidades para aprender y crecer.</h6>
                            </div>
                        </div>
                        <div className={styles.contentImageMobile}>
                            <div className={styles.contentImage}>
                                <img src={Me} alt="Lautaro García" className={styles.image} />
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button} onClick={handlePdf}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="none"><path fill="#fdb500" d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" /><path fill="#fdb500" fillRule="evenodd" d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z" clipRule="evenodd" /><path stroke="#fdb500" strokeLinecap="round" strokeLinejoin="round" d="M11.5 2.1v4.7h4.7" /><path fill="#fdb500" d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133" /><path fill="#fdb500" fillRule="evenodd" d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z" clipRule="evenodd" /></g></svg>
                                Ver CV
                            </button>
                            <button className={styles.button} onClick={() => handleRedirect('https://www.linkedin.com/in/lautarongarcia/')}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#fdb500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></g></svg>
                                Linkedin
                            </button>
                            <button className={styles.button} onClick={() => handleRedirect('https://github.com/Lautigarcia17')}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#fdb500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="#fdb500"><path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568" /><path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22" /></g></svg>
                                Github
                            </button>
                            <button className={styles.button} onClick={() => handleRedirect('mailto:lautaronhgarcia@gmail.com')}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#fdb500"><path d="M6.412 7.584C5.36 9.044 5 10.827 5 12c0 1.173.36 2.956 1.412 4.416C7.426 17.825 9.126 19 12 19c1.98 0 3.385-.558 4.388-1.334a1 1 0 1 1 1.224 1.581C16.229 20.317 14.385 21 12 21c-3.526 0-5.826-1.491-7.212-3.416C3.44 15.711 3 13.494 3 12c0-1.493.44-3.711 1.788-5.584C6.174 4.492 8.474 3 12 3s5.826 1.492 7.212 3.416C20.56 8.289 21 10.506 21 12a3.79 3.79 0 0 1-.689 2.147c-.56.778-1.485 1.353-2.811 1.353c-1.326 0-2.251-.575-2.812-1.353A3.791 3.791 0 0 1 14 12a1 1 0 1 1 2 0c0 .257.085.664.311.978c.19.264.515.522 1.189.522s.999-.258 1.189-.522c.226-.314.311-.721.311-.978c0-1.173-.36-2.956-1.412-4.416C16.575 6.175 14.874 5 12 5S7.426 6.175 6.412 7.584z" /><path d="M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0z" /></g></svg>
                                Email
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default WelcomeSection