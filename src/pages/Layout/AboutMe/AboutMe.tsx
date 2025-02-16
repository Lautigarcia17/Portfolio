import styles from './AboutMe.module.css'

function AboutMe() {
    return (
        <div className={styles.containerAboutMe}>
            <div className={styles.contentAboutMe}>

                <div className={styles.headerAboutMe}>
                    <h1 className={styles.titleDiv}>Detrás del código </h1>
                    <h3 className={styles.textProject}>
                        Con una formación en la Universidad Tecnológica Nacional y una mentalidad enfocada en la mejora constante, he desarrollado diversos proyectos personales que me han permitido afianzar mis habilidades. Desde la gestión de usuarios hasta la creación de plataformas adaptadas a mis propias necesidades, cada desafío ha sido una oportunidad para crecer profesionalmente y perfeccionar mis conocimientos en tecnologías. Me interesa seguir creciendo en entornos dinámicos donde pueda aportar ideas innovadoras y escalables, enfocándome en ofrecer experiencias de usuario optimizadas y eficientes.
                    </h3>
                </div>

                <div className={styles.about}>
                    <div className={styles.data}>
                        <h2 className={styles.titleDiv}>Dentro del código</h2>
                        <ul className={styles.skillsList}>
                            <li>
                                <span className={styles.star}>★</span>
                                <strong>Desarrollo Front-End <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H7l4 5l-4 5h6l4-5z"/></svg></strong>
                                <div className={styles.icons}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 128 128"><linearGradient id="IconifyId190a90cb68fe30e818" x1="14.704" x2="110.985" y1="46.27" y2="92.024" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e40035" /><stop offset=".24" stopColor="#f60a48" /><stop offset=".352" stopColor="#f20755" /><stop offset=".494" stopColor="#dc087d" /><stop offset=".745" stopColor="#9717e7" /><stop offset="1" stopColor="#6c00f5" /></linearGradient><path fill="url(#IconifyId190a90cb68fe30e818)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z" /><linearGradient id="IconifyId190a90cb68fe30e819" x1="28.733" x2="91.742" y1="117.071" y2="45.195" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ff31d9" /><stop offset="1" stopColor="#ff5be1" stopOpacity="0" /></linearGradient><path fill="url(#IconifyId190a90cb68fe30e819)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" /><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" /><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" /><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" /><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" /><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z" /><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z" /><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z" /><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 128 128"><g fill="#4e8ef7"><circle cx="64" cy="64" r="24.08" /><path d="M113.14 23.14a8.27 8.27 0 0 0-13.7-6.25a59 59 0 1 0 11.67 11.67a8.24 8.24 0 0 0 2.03-5.42M64 121A57 57 0 1 1 98.1 18.36a8.27 8.27 0 0 0 11.53 11.53A57 57 0 0 1 64 121" /></g></svg>
                                </div>
                            </li>
                            <li>
                                <span className={styles.star}>★</span>
                                <strong>Desarrollo Back-End <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H7l4 5l-4 5h6l4-5z"/></svg></strong>
                                <div className={styles.icons}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 256 289"><path fill="#539E43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 256 351"><defs><filter id="IconifyId190b890049829afc414" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5" /><feOffset in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" /></filter><filter id="IconifyId190b890049829afc415" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5" /><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" /></filter><path id="IconifyId190b890049829afc416" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z" /><path id="IconifyId190b890049829afc417" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z" /></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z" /><use fill="#FFA712" fillRule="evenodd" href="#IconifyId190b890049829afc416" /><use filter="url(#IconifyId190b890049829afc414)" href="#IconifyId190b890049829afc416" /><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z" /><use fill="#FFA50E" fillRule="evenodd" href="#IconifyId190b890049829afc417" /><use filter="url(#IconifyId190b890049829afc415)" href="#IconifyId190b890049829afc417" /><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z" /><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005" /><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z" /><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847l-.285-1.752z" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 16 16"><path fill="#7c3aed" d="M7 5.5a2.5 2.5 0 1 0 1.81 4.225a.75.75 0 0 1 1.086 1.035a4 4 0 1 1-.01-5.53a.75.75 0 0 1-1.082 1.04A2.49 2.49 0 0 0 7 5.5" /><path fill="#7c3aed" d="M6.586.102a.75.75 0 0 1 .756 0l4.715 2.75a.75.75 0 0 1-.756 1.296l-4.337-2.53L1.5 4.806v6.388l5.464 3.188l4.337-2.53a.75.75 0 1 1 .755 1.296l-4.714 2.75a.75.75 0 0 1-.756 0L.372 12.273A.75.75 0 0 1 0 11.625v-7.25a.75.75 0 0 1 .372-.648z" /><path fill="#7c3aed" d="M12.18 5.25a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 .5-.5m2.14 0a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 .5-.5" /><path fill="#7c3aed" d="M10.5 6.93a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5m0 2.14a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5" /></svg>
                                </div>
                            </li>
                            <li>
                                <span className={styles.star}>★</span>
                                <strong>Gestión de Bases de Datos <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H7l4 5l-4 5h6l4-5z"/></svg></strong>
                                <div className={styles.icons}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 512 349"><path fill="#00758F" d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026q12.765-34.188 17.839-74.513h18.71q-12.069 65.65-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525q8.565-.002 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505zM33.223 199.266l28.5 86.956h.176l28.675-86.956h23.428c5.13 43.124 8.16 82.581 9.09 118.346H103.34q-1.044-50.148-5.768-94.32H97.4l-30.078 94.32H52.28l-29.896-94.32h-.176q-3.325 42.422-4.196 94.32H0c1.164-42.08 4.077-81.525 8.739-118.346z" /><path fill="#F29111" d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485q-7.026 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909m-93.88.172c10.957 0 20.92 2.932 29.894 8.775l-4.558 10.157c-7.679-3.264-15.25-4.903-22.716-4.903c-6.058 0-10.726 1.458-13.98 4.392c-3.272 2.908-5.296 6.65-5.296 11.212c0 7.01 4.994 13.089 14.215 18.225a816 816 0 0 1 9.031 5.011l.688.387l.345.194l.689.387l.344.194l.688.388c6.98 3.935 13.548 7.691 13.548 7.691c9.22 6.545 13.816 13.523 13.816 25.016c0 10.037-3.678 18.276-11.01 24.723c-7.337 6.418-17.194 9.636-29.538 9.636c-11.545 0-22.734-3.704-33.572-11.05l5.07-10.166c9.327 4.675 17.767 7.01 25.346 7.01c7.108 0 12.672-1.587 16.697-4.721c4.017-3.157 6.424-7.56 6.424-13.143c0-7.027-4.888-13.034-13.855-18.073a898 898 0 0 1-8.395-4.697l-.687-.389c-1.262-.713-2.533-1.435-3.778-2.142l-.675-.384c-6.055-3.444-11.29-6.453-11.29-6.453c-8.964-6.557-13.459-13.592-13.459-25.184c0-9.587 3.352-17.336 10.046-23.231q10.066-8.862 25.968-8.862m175.895 1.584v103.788h37.238v14.558h-56.124V199.266zm57.93 103.833v2.46h-4.094v12.04h-3.13v-12.04h-4.253v-2.46zm7.56 0l3.931 9.884l3.611-9.884h4.437v14.5h-2.95v-11.035l-4.11 11.035h-2.127l-4.117-11.035h-.158v11.035h-2.791v-14.5zM350.57 212.064c-18.066 0-27.104 14.91-27.104 44.71c0 17.07 2.395 29.448 7.176 37.163c4.428 7.14 11.363 10.703 20.806 10.703c18.066 0 27.103-15.026 27.103-45.064c0-16.831-2.395-29.103-7.17-36.822c-4.433-7.124-11.365-10.69-20.81-10.69" /><path fill="#00758F" d="M303.218 7.333c5.993-14.726 26.948-3.574 35.08 1.57c1.993 1.287 4.279 4.006 6.564 5.011c3.565.14 7.127.419 10.698.568c6.698 1.574 12.972 2.86 18.25 5.866c24.528 14.445 40.495 29.165 55.19 53.479c3.14 5.15 4.709 10.723 7.274 16.296c3.56 8.307 7.56 17.027 11.692 24.882c1.85 3.724 3.281 7.865 5.85 11.01c1.003 1.438 3.852 1.862 5.555 2.721c4.708 2.437 10.412 4.287 14.84 7.147c8.269 5.156 16.264 11.3 23.532 17.59c2.709 2.428 4.555 5.865 7.136 8.433v1.296c-2.291.703-4.574 1.423-6.859 2c-4.991 1.282-9.412.992-14.254 2.275c-2.992.868-6.707 2.013-9.845 2.304l.29.292c1.846 5.275 11.834 9.565 16.402 12.72c5.548 4.004 10.689 8.86 14.827 14.437c1.429 1.423 2.858 2.718 4.28 4.137c.994 1.438 1.274 3.298 2.28 4.58v.434c-1.114-.393-1.915-1.143-2.674-1.927l-.453-.473c-.453-.47-.91-.932-1.431-1.313c-3.148-2.15-6.274-4.722-9.422-6.721c-5.412-3.434-11.689-5.427-17.246-8.874c-3.142-2.001-6.137-4.28-9.132-6.57c-2.715-2.007-5.705-5.861-7.411-8.721c-1.005-1.58-1.143-3.437-2.291-4.58c.205-1.909 1.954-2.476 3.719-2.942l.406-.107c.609-.158 1.205-.316 1.725-.525c7.414-3.148 16.253-4.29 27.667-4.004c-.43-2.866-7.562-6.437-9.839-8.153c-4.57-3.294-9.409-6.731-14.257-9.729c-2.569-1.57-6.996-2.716-9.842-3.999c-3.851-1.574-12.41-3.147-14.544-6.145c-3.625-4.726-6.229-10.363-8.757-16.057l-.688-1.554l-.69-1.553c-2.988-6.857-6.7-14.006-9.695-21.027c-1.566-3.425-2.285-6.431-4-9.716c-10.407-20.158-25.81-37.035-44.485-48.904c-6.137-3.862-12.98-7.436-20.534-9.865c-4.281-1.293-9.419-.578-13.98-1.57h-3.002c-2.562-.722-4.701-3.438-6.7-4.87c-4.415-2.998-8.837-5.011-14.117-7.15c-1.85-.858-7.133-2.856-8.977-1.283c-1.142.287-1.721.718-2.002 1.864c-1.136 1.71-.137 4.286.57 5.863c2.142 4.57 5.134 7.286 7.85 11.148c2.416 3.425 5.417 7.287 7.13 11.011c3.696 8.005 5.417 16.874 8.842 24.878c1.27 3.01 3.279 6.435 5.128 9.15c1.567 2.155 4.416 3.713 5.278 6.441c1.718 2.86-2.572 12.297-3.565 15.294c-3.715 11.727-2.995 28.028 1.283 38.193l.228.536l.228.543c1.562 3.723 3.234 7.732 7.387 8.773c.286-.284 0-.135.567-.284c1.005-7.868 1.288-15.445 4-21.601c1.567-3.849 4.696-6.57 6.841-9.712c1.43.856 1.43 3.437 2.282 5.145c1.856 4.43 3.849 9.287 6.137 13.73c4.696 9.15 9.98 18.021 15.967 26.025c2.005 2.859 4.85 6.006 7.416 8.581c1.143.997 2.423 1.573 3.282 2.856h.28v.432c-4.278-1.577-6.99-6.003-10.402-8.587c-6.424-4.857-14.117-12.151-18.545-19.15c-1.852-4.018-3.854-7.869-5.85-11.867v-.289c-.853 1.142-.567 2.276-.994 4.004c-1.852 7.145-.426 15.296-6.843 17.866c-7.274 3.01-12.7-4.857-14.977-8.432c-7.276-11.866-9.269-31.884-4.138-48.043c1.14-3.577 1.295-7.867 3.285-10.723c-.43-2.582-2.42-3.288-3.571-4.87c-1.996-2.704-3.705-5.854-5.268-8.857c-3.002-5.866-5.138-12.875-7.417-19.166c-1.002-2.569-1.289-5.148-2.288-7.58c-1.704-3.712-4.845-7.436-7.268-10.72c-3.281-4.72-12.837-13.868-8.985-23.168m46.772 28.015c.381.382.841.716 1.317 1.045l.574.394c.765.53 1.506 1.088 1.96 1.848c.72 1.006.854 1.999 1.716 3.007c0 3.437-.996 5.722-3.007 7.146c0 0-.137.15-.278.29c-1.14-2.291-2.139-4.57-3.287-6.859c-1.414-1.998-3.413-3.583-4.565-5.866h-.277v-.287c1.721-.425 3.428-.718 5.847-.718" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 32 32"><path fill="#ffc24a" d="m5.8 24.6l.17-.237l8.02-15.214l.017-.161l-3.535-6.64a.656.656 0 0 0-1.227.207Z" /><path fill="#ffa712" d="m5.9 24.42l.128-.25l7.937-15.056l-3.526-6.666a.6.6 0 0 0-1.133.206Z" /><path fill="#f4bd62" d="m16.584 14.01l2.632-2.7l-2.633-5.021a.678.678 0 0 0-1.195 0l-1.407 2.682V9.2Z" /><path fill="#ffa50e" d="m16.537 13.9l2.563-2.62l-2.563-4.88a.589.589 0 0 0-1.074-.047l-1.414 2.729l-.042.139Z" /><path fill="#f6820c" d="m5.802 24.601l.077-.078l.279-.113l10.26-10.222l.13-.354l-2.559-4.878z" /><path fill="#fde068" d="m16.912 29.756l9.288-5.179l-2.654-16.331a.635.635 0 0 0-1.075-.346L5.8 24.6l9.233 5.155a1.93 1.93 0 0 0 1.878 0" /><path fill="#fcca3f" d="M26.115 24.534L23.483 8.326a.557.557 0 0 0-.967-.353L5.9 24.569l9.131 5.1a1.91 1.91 0 0 0 1.863 0Z" /><path fill="#eeab37" d="M16.912 29.6a1.93 1.93 0 0 1-1.878 0l-9.158-5.078l-.076.078l9.233 5.155a1.93 1.93 0 0 0 1.878 0l9.289-5.178l-.023-.14Z" /><path fill="#252525" d="m23.201 13l-7.796 3.534v11.069l6.22-2.818V31L31 26.743V16.534z" /><path fill="#fff" d="m23.201 14.73l-6.216 2.819v2.778l6.216-2.82l6.22 2.82v-2.778z" /><path fill="#fff" d="m23.201 19.564l-6.216 2.817v2.777l6.216-2.821l6.22 2.821v-2.777z" /><path fill="#fff" d="m28.606 26.098l-3.055-1.386l-2.35 1.066v2.77z" /></svg>
                                </div>
                            </li>
                            <li>
                                <span className={styles.star}>★</span>
                                <strong>Herramientas y Tecnologías <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H7l4 5l-4 5h6l4-5z"/></svg></strong>
                                <div className={styles.icons}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#0284c7" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.8 6.8 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.3 9.3 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.8 6.8 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9 9 0 0 0-2.125 1.045A11.4 11.4 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9 9 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A4 4 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14" /></g></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 128 128"><path fill="#ffa726" d="M63.934.656L5.25 21.66l8.863 77.719l49.82 27.77l49.887-27.77l9.059-77.719Zm0 0" /><path fill="#fb8c00" d="M63.934.656v126.492l49.886-27.77l9.059-77.718Zm0 0" /><path fill="#ffe0b2" d="m72.797 96.688l-41.55-20.02l23.827-14.703L96.887 82.05Zm0 0" /><path fill="#fff3e0" d="m72.797 81.262l-41.55-20.086l23.827-14.637l41.813 20.086Zm0 0" /><path fill="#fff" d="m72.797 65.84l-41.55-20.09l23.827-14.703l41.813 20.086Zm0 0" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 128 128"><path fill="url(#IconifyId190b890049829afc47)" d="M14.985 15.15c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.563-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94" /><g filter="url(#IconifyId190b890049829afc49)"><path fill="url(#IconifyId190b890049829afc48)" d="M67.11 79.174c11.619 0 18.62-5.689 18.62-15.072c0-7.093-4.995-12.228-12.413-13.041v-.296c5.45-.886 9.726-5.947 9.726-11.6c0-8.053-6.358-13.299-16.047-13.299h-21.8v53.308zM53.674 32.627h11.279c6.13 0 9.613 2.733 9.613 7.684c0 5.282-4.05 8.238-11.392 8.238h-9.5zm0 39.787V54.866h11.203c8.023 0 12.186 2.955 12.186 8.718s-4.049 8.83-11.694 8.83z" /><path fill="#fff" d="M67.11 79.174c11.619 0 18.62-5.689 18.62-15.072c0-7.093-4.995-12.228-12.413-13.041v-.296c5.45-.886 9.726-5.947 9.726-11.6c0-8.053-6.358-13.299-16.047-13.299h-21.8v53.308zM53.674 32.627h11.279c6.13 0 9.613 2.733 9.613 7.684c0 5.282-4.05 8.238-11.392 8.238h-9.5zm0 39.787V54.866h11.203c8.023 0 12.186 2.955 12.186 8.718s-4.049 8.83-11.694 8.83z" /></g><path fill="#7952B3" d="M11.398 121.43v-17.738h5.047q2.3 0 3.649 1.126q1.348 1.125 1.348 2.931q0 1.51-.816 2.623q-.817 1.113-2.252 1.583v.05q1.794.21 2.87 1.36q1.076 1.138 1.076 2.969q0 2.276-1.632 3.686q-1.633 1.41-4.12 1.41zm2.078-15.858v5.727h2.128q1.707 0 2.684-.816q.977-.83.977-2.326q0-2.585-3.402-2.585zm0 7.595v6.383h2.82q1.83 0 2.833-.866q1.014-.866 1.014-2.375q0-3.142-4.28-3.142zm17.466 8.563q-2.808 0-4.49-1.769q-1.67-1.78-1.67-4.713q0-3.19 1.744-4.985q1.745-1.793 4.713-1.793q2.832 0 4.416 1.744q1.595 1.744 1.595 4.836q0 3.031-1.72 4.862q-1.706 1.818-4.588 1.818m.148-11.553q-1.954 0-3.092 1.336q-1.138 1.323-1.138 3.661q0 2.252 1.15 3.55q1.15 1.3 3.08 1.3q1.967 0 3.019-1.275q1.063-1.274 1.063-3.624q0-2.375-1.063-3.662q-1.052-1.286-3.019-1.286m14.696 11.553q-2.808 0-4.49-1.769q-1.67-1.78-1.67-4.713q0-3.19 1.744-4.985q1.745-1.793 4.713-1.793q2.832 0 4.416 1.744q1.596 1.744 1.596 4.836q0 3.031-1.72 4.862q-1.707 1.818-4.59 1.818Zm.148-11.553q-1.954 0-3.092 1.336q-1.138 1.323-1.138 3.661q0 2.252 1.15 3.55q1.15 1.3 3.08 1.3q1.967 0 3.019-1.275q1.063-1.274 1.063-3.624q0-2.375-1.063-3.662q-1.052-1.286-3.02-1.286ZM61.21 121.31q-.717.396-1.893.396q-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.19v1.732h-3.19v7.137q0 1.274.433 1.819q.432.544 1.434.544q.767 0 1.324-.42zm1.942-.34v-2.177q1.657 1.224 3.649 1.224q2.672 0 2.672-1.78q0-.508-.235-.854a2.1 2.1 0 0 0-.619-.631a4.3 4.3 0 0 0-.915-.482a35 35 0 0 0-1.126-.458a16 16 0 0 1-1.484-.668a5 5 0 0 1-1.064-.767a3.1 3.1 0 0 1-.643-.977q-.21-.544-.21-1.274q0-.89.408-1.571a3.5 3.5 0 0 1 1.088-1.15a5 5 0 0 1 1.547-.706a7 7 0 0 1 1.806-.235q1.645 0 2.944.57v2.053q-1.398-.916-3.217-.916q-.57 0-1.026.136a2.5 2.5 0 0 0-.792.36a1.7 1.7 0 0 0-.507.568a1.5 1.5 0 0 0-.173.718q0 .493.173.828q.184.335.532.594q.346.26.841.47t1.126.458q.84.321 1.509.668a5 5 0 0 1 1.138.767q.47.42.717.977q.26.556.26 1.323q0 .94-.42 1.633q-.41.693-1.102 1.15a5.1 5.1 0 0 1-1.595.681a8 8 0 0 1-1.893.223q-1.954 0-3.39-.755zm17.39.34q-.716.396-1.892.396q-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.19v1.732h-3.19v7.137q0 1.274.433 1.819q.432.544 1.434.544q.767 0 1.324-.42v1.731Zm9.316-10.49q-.532-.408-1.534-.408q-1.3 0-2.177 1.224q-.866 1.225-.866 3.34v6.457h-2.028v-12.666h2.028v2.61h.05q.434-1.336 1.323-2.078q.89-.755 1.992-.755q.79 0 1.212.174zm11.271 10.61H99.1v-1.98h-.05q-1.322 2.277-3.894 2.277q-1.893 0-2.97-1.002q-1.063-1.002-1.063-2.66q0-3.55 4.18-4.13l3.798-.533q0-3.228-2.61-3.228q-2.288 0-4.131 1.558v-2.078q1.867-1.187 4.305-1.187q4.465 0 4.465 4.725zm-2.03-6.407l-3.054.42q-1.41.198-2.128.705q-.717.495-.717 1.769q0 .928.656 1.522q.668.58 1.769.58q1.51 0 2.486-1.05q.99-1.063.99-2.685l-.001-1.261Zm7.93 4.577h-.05v7.657h-2.028v-18.493h2.029v2.226h.049q1.497-2.523 4.379-2.523q2.45 0 3.822 1.707q1.373 1.694 1.373 4.552q0 3.179-1.546 5.096q-1.547 1.905-4.23 1.905q-2.462 0-3.798-2.128zm-.05-5.109v1.77q0 1.57 1.015 2.671q1.027 1.089 2.597 1.089q1.843 0 2.883-1.41q1.05-1.41 1.05-3.922q0-2.115-.976-3.315q-.977-1.2-2.647-1.2q-1.77 0-2.845 1.237q-1.077 1.225-1.077 3.08" /><defs><linearGradient id="IconifyId190b890049829afc47" x1="19.8" x2="129.708" y1="4.704" y2="91.95" gradientUnits="userSpaceOnUse"><stop stopColor="#9013FE" /><stop offset="1" stopColor="#6610F2" /></linearGradient><linearGradient id="IconifyId190b890049829afc48" x1="49.032" x2="73.598" y1="29.374" y2="70.922" gradientUnits="userSpaceOnUse"><stop stopColor="#fff" /><stop offset="1" stopColor="#F1E5FC" /></linearGradient><filter id="IconifyId190b890049829afc49" width="48.641" height="61.415" x="41.143" y="22.795" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy=".983" /><feGaussianBlur stdDeviation="1.965" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_2" result="shape" /></filter></defs></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none"><path fill="#0073E6" fill-rule="evenodd" d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z" clip-rule="evenodd"/></svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe