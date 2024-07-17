import myImage from '../../assets/me.jpg'
import styles from './WelcomeSection.module.css'
import {toast,Toaster} from 'react-hot-toast'


function WelcomeSection(){
    const copyText = () => {
        navigator.clipboard.writeText('lauti1718garcia@gmail.com')
        .then(()=> {
            toast.success('Copiado!', {position:'top-right'})
        })
        .catch(()=> console.log('No se copio el codigo'))
    }
    
    
    const handleRedirect = (url : string) => {
        window.open(url);
    }
    
    const handlePdf = () => {
        window.open(`/LautaroNGarcia.pdf`, '_blank');
    }


    return(
        <div className={styles.content}>
            <div>
                <img src={myImage} alt="GATO" className={styles.image}/>
            </div>
            <div>
                <div className={styles.textProfile}>
                    <h1 className={styles.name}>Lautaro Nahuel Garcia</h1>
                    <h2 className={styles.tittle}>Desarrollador Front-End</h2>
                    <h6 className={styles.text}>Apasionado por el desarrollo y por el crecimiento continuo.</h6>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={handlePdf}>
                            <svg className={styles.icon}  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20"><g fill="#0284c7"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"/><path  d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006" clipRule="evenodd"/><path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clipRule="evenodd"/></g></svg>
                            Ver CV
                        </button>
                        <button className={styles.button} onClick={() => handleRedirect('https://www.linkedin.com/in/lautarongarcia/')}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 432 432"><path fill="#0284c7" d="M363 365V244q0-31-22-53t-53-22q-15 0-30 8.5T235 199v-26h-64v192h64V252q0-13 9-22.5t22.5-9.5t23 9.5T299 252v113zM96 137q16 0 27.5-11T135 99t-11.5-27.5T96 60T68.5 71.5T57 99t11.5 27T96 137m32 228V173H64v192zM384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3z"/></svg>
                            Linkedin
                        </button>
                        <button className={styles.button} onClick={() => handleRedirect('https://github.com/Lautigarcia17')}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#0284c7" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.8 6.8 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.3 9.3 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.8 6.8 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9 9 0 0 0-2.125 1.045A11.4 11.4 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9 9 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A4 4 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14"/></g></svg>
                            Github
                        </button>
                        <button className={styles.button} onClick={copyText}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><path fill="none" stroke="#0284c7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M29 9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m26 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9"/></svg>
                            Email
                        </button>
                        <Toaster />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default WelcomeSection