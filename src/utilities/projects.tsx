import { Bmovies, GameRoom, Clinic, Airline, AirlineVideo, GeneralaVideo, Generala } from '../assets/index'
import { Project } from '../types/project'

export const projects : Project[] = [
    {
        title: 'Airline',
        text : 'Desarrollado hacer una gestion de vuelos y pasajeros, contando las cotizaciones y la cantidad de personas por vuelo, asi como una estadistica por cada viaje.',
        image: Airline,
        icons: [
            { name: 'C#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#7c3aed" d="M7 5.5a2.5 2.5 0 1 0 1.81 4.225a.75.75 0 0 1 1.086 1.035a4 4 0 1 1-.01-5.53a.75.75 0 0 1-1.082 1.04A2.49 2.49 0 0 0 7 5.5" /><path fill="#7c3aed" d="M6.586.102a.75.75 0 0 1 .756 0l4.715 2.75a.75.75 0 0 1-.756 1.296l-4.337-2.53L1.5 4.806v6.388l5.464 3.188l4.337-2.53a.75.75 0 1 1 .755 1.296l-4.714 2.75a.75.75 0 0 1-.756 0L.372 12.273A.75.75 0 0 1 0 11.625v-7.25a.75.75 0 0 1 .372-.648z" /><path fill="#7c3aed" d="M12.18 5.25a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 .5-.5m2.14 0a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 .5-.5" /><path fill="#7c3aed" d="M10.5 6.93a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5m0 2.14a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5" /></svg> },
            { name: '.NET', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#512BD4" d="M0 0h256v256H0z" /><path fill="#FFF" d="M45.627 163.555q-2.715 0-4.615-1.809q-1.9-1.856-1.901-4.408q0-2.598 1.9-4.454q1.901-1.856 4.616-1.856q2.76 0 4.661 1.856q1.946 1.856 1.946 4.454q0 2.551-1.946 4.408q-1.9 1.81-4.66 1.81m72.361-1.02h-11.765L75.225 113.63a22 22 0 0 1-1.946-3.85h-.272l.047.305l.043.35l.04.393l.038.436l.049.736l.042.832l.035.93l.028 1.028l.02 1.125l.01.805l.01 2.2v43.614H62.961V96h12.535l29.957 47.743l.74 1.169l.477.768l.408.675l.34.583l.19.338l.16.296l.13.255h.18l-.034-.21l-.064-.45l-.06-.493l-.053-.537l-.024-.285l-.046-.602l-.04-.645l-.035-.69l-.042-1.114l-.03-1.212l-.018-1.31l-.006-1.407V96h10.362zm50.685 0h-36.428V96h34.98v9.373h-24.21v18.837h22.31v9.326h-22.31v19.673h25.658zm51.772-57.162H201.8v57.162h-10.77v-57.162h-18.6V96h48.014z" /></svg> },
        ],
        github: "https://github.com/Lautigarcia17/tps_laboratorio_2/tree/master/Garcia.Lautaro.PrimerParcialLaboratorioDos",
        video: AirlineVideo
    },
    {
        title: 'Generala',
        text : 'Desarrollado para simular el juego de la generala, permitiendo jugar, registrar ycalcular automáticamente los puntajes obtenidos, así como llevar un historial de partidas jugadas.',
        image: Generala,
        icons: [
            { name: 'C#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#7c3aed" d="M7 5.5a2.5 2.5 0 1 0 1.81 4.225a.75.75 0 0 1 1.086 1.035a4 4 0 1 1-.01-5.53a.75.75 0 0 1-1.082 1.04A2.49 2.49 0 0 0 7 5.5" /><path fill="#7c3aed" d="M6.586.102a.75.75 0 0 1 .756 0l4.715 2.75a.75.75 0 0 1-.756 1.296l-4.337-2.53L1.5 4.806v6.388l5.464 3.188l4.337-2.53a.75.75 0 1 1 .755 1.296l-4.714 2.75a.75.75 0 0 1-.756 0L.372 12.273A.75.75 0 0 1 0 11.625v-7.25a.75.75 0 0 1 .372-.648z" /><path fill="#7c3aed" d="M12.18 5.25a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 .5-.5m2.14 0a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 .5-.5" /><path fill="#7c3aed" d="M10.5 6.93a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5m0 2.14a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5" /></svg> },
            { name: '.NET', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#512BD4" d="M0 0h256v256H0z" /><path fill="#FFF" d="M45.627 163.555q-2.715 0-4.615-1.809q-1.9-1.856-1.901-4.408q0-2.598 1.9-4.454q1.901-1.856 4.616-1.856q2.76 0 4.661 1.856q1.946 1.856 1.946 4.454q0 2.551-1.946 4.408q-1.9 1.81-4.66 1.81m72.361-1.02h-11.765L75.225 113.63a22 22 0 0 1-1.946-3.85h-.272l.047.305l.043.35l.04.393l.038.436l.049.736l.042.832l.035.93l.028 1.028l.02 1.125l.01.805l.01 2.2v43.614H62.961V96h12.535l29.957 47.743l.74 1.169l.477.768l.408.675l.34.583l.19.338l.16.296l.13.255h.18l-.034-.21l-.064-.45l-.06-.493l-.053-.537l-.024-.285l-.046-.602l-.04-.645l-.035-.69l-.042-1.114l-.03-1.212l-.018-1.31l-.006-1.407V96h10.362zm50.685 0h-36.428V96h34.98v9.373h-24.21v18.837h22.31v9.326h-22.31v19.673h25.658zm51.772-57.162H201.8v57.162h-10.77v-57.162h-18.6V96h48.014z" /></svg> },
            { name: 'SQL', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m5 0v8h4m-8-1l1 1M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1"/></svg> },
        ],
        github: "https://github.com/Lautigarcia17/tps_laboratorio_2/tree/master/Garcia.Lautaro.SegundoParcialLaboratorioDos",
        video: GeneralaVideo
    },
    {
        title: 'Sala de juegos',
        text : 'Desarrollado para una experiencia de usuario interactiva y entretenida, donde puede jugar a diversos juegos.',
        image: GameRoom,
        icons: [
            { name: 'Angular', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><linearGradient id="IconifyId190a90cb68fe30e818" x1="14.704" x2="110.985" y1="46.27" y2="92.024" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e40035"/><stop offset=".24" stopColor="#f60a48"/><stop offset=".352" stopColor="#f20755"/><stop offset=".494" stopColor="#dc087d"/><stop offset=".745" stopColor="#9717e7"/><stop offset="1" stopColor="#6c00f5"/></linearGradient><path fill="url(#IconifyId190a90cb68fe30e818)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"/><linearGradient id="IconifyId190a90cb68fe30e819" x1="28.733" x2="91.742" y1="117.071" y2="45.195" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ff31d9"/><stop offset="1" stopColor="#ff5be1" stopOpacity="0"/></linearGradient><path fill="url(#IconifyId190a90cb68fe30e819)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"/></svg> },
            { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"/></svg> },
            { name: 'HTML5', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg> },
            { name: 'CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg> },
            { name: 'Firebase', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 351"><defs><filter id="IconifyId190a90cb68fe30e810" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"/><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/></filter><filter id="IconifyId190a90cb68fe30e811" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"/><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/></filter><path id="IconifyId190a90cb68fe30e812" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"/><path id="IconifyId190a90cb68fe30e813" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"/></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"/><use fill="#FFA712" fillRule="evenodd" href="#IconifyId190a90cb68fe30e812"/><use filter="url(#IconifyId190a90cb68fe30e810)" href="#IconifyId190a90cb68fe30e812"/><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"/><use fill="#FFA50E" fillRule="evenodd" href="#IconifyId190a90cb68fe30e813"/><use filter="url(#IconifyId190a90cb68fe30e811)" href="#IconifyId190a90cb68fe30e813"/><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"/><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"/><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"/><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"/></svg> },
        ],
        github: "https://github.com/Lautigarcia17/Sala-de-juegos",
        page: "https://saladejuegos-3eb2a.web.app"
    },
    {
        title: 'Clinica online',
        text : 'Desarrollado para facilitar la gestion de citas medicas y el seguimiento de pacientes de forma virtual. Pudiendo acceder a historiales y solicitar turnos',
        image: Clinic,
        icons: [
            { name: 'Angular', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><linearGradient id="IconifyId190a90cb68fe30e818" x1="14.704" x2="110.985" y1="46.27" y2="92.024" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e40035"/><stop offset=".24" stopColor="#f60a48"/><stop offset=".352" stopColor="#f20755"/><stop offset=".494" stopColor="#dc087d"/><stop offset=".745" stopColor="#9717e7"/><stop offset="1" stopColor="#6c00f5"/></linearGradient><path fill="url(#IconifyId190a90cb68fe30e818)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"/><linearGradient id="IconifyId190a90cb68fe30e819" x1="28.733" x2="91.742" y1="117.071" y2="45.195" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ff31d9"/><stop offset="1" stopColor="#ff5be1" stopOpacity="0"/></linearGradient><path fill="url(#IconifyId190a90cb68fe30e819)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z"/></svg> },
            { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"/></svg> },
            { name: 'HTML5', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg> },
            { name: 'CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg> },
            { name: 'Firebase', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 351"><defs><filter id="IconifyId190a90cb68fe30e810" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"/><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/></filter><filter id="IconifyId190a90cb68fe30e811" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"/><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/></filter><path id="IconifyId190a90cb68fe30e812" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"/><path id="IconifyId190a90cb68fe30e813" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"/></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"/><use fill="#FFA712" fillRule="evenodd" href="#IconifyId190a90cb68fe30e812"/><use filter="url(#IconifyId190a90cb68fe30e810)" href="#IconifyId190a90cb68fe30e812"/><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"/><use fill="#FFA50E" fillRule="evenodd" href="#IconifyId190a90cb68fe30e813"/><use filter="url(#IconifyId190a90cb68fe30e811)" href="#IconifyId190a90cb68fe30e813"/><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"/><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005"/><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.94 23.94 0 0 0 23.334.006z"/><path fill="#EEAB37" d="M139.12 345.64a24.13 24.13 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.13 24.13 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"/></svg> },
        ],
        github: "https://github.com/Lautigarcia17/clinicaOnline",
        page: "https://clinicaonline-de6c8.web.app"
    },
    {
        title: 'Bmovies',
        text : 'Desarrollado para registrar y organizar las películas vistas, permitiendo guardar reseñas personales y mantener un seguimiento de mi pasión por el cine.',
        image: Bmovies,
        icons: [
            { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"/></svg> },
            { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"/></svg> },
            { name: 'HTML5', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/><path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/></svg> },
            { name: 'CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg> },
            { name: 'Supabase', icon: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 128 128"><defs><linearGradient id="IconifyId19161022acb3f76e50" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#249361"/><stop offset="1" stopColor="#3ecf8e"/></linearGradient><linearGradient id="IconifyId19161022acb3f76e51" x1="36.156" x2="54.484" y1="30.578" y2="65.081" gradientTransform="translate(29.387 60.096)scale(1.1436)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop offset="1" stopOpacity="0"/></linearGradient></defs><path fill="url(#IconifyId19161022acb3f76e50)" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)"/><path fill="url(#IconifyId19161022acb3f76e51)" fillOpacity=".2" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)"/><path fill="#3ecf8e" d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"/></svg> },
        ],
        github: "https://github.com/Lautigarcia17/Bmovies",
        page: "https://bmovies-git-master-lautaro-nahuel-garcias-projects.vercel.app"
    },
]