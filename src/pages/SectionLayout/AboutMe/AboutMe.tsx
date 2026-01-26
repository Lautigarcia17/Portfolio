import { motion } from 'framer-motion'
import styles from './AboutMe.module.css'

const techStack = {
    frontend: [
        { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" /></svg> },
        { name: 'Angular', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="angular-grad" x1="14.704" x2="110.985" y1="46.27" y2="92.024" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e40035" /><stop offset=".24" stopColor="#f60a48" /><stop offset=".352" stopColor="#f20755" /><stop offset=".494" stopColor="#dc087d" /><stop offset=".745" stopColor="#9717e7" /><stop offset="1" stopColor="#6c00f5" /></linearGradient><path fill="url(#angular-grad)" d="m124.5 21.3l-4.4 68.6L78.3 0zm-29 88.7L64 128l-31.5-18l6.4-15.5h50.3zM64 34.1l16.5 40.2h-33zM7.9 89.9L3.5 21.3L49.7 0z" /></svg> },
        { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#007acc" d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z" /></svg> },
        { name: 'Ionic', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#4e8ef7"><circle cx="64" cy="64" r="24.08" /><path d="M113.14 23.14a8.27 8.27 0 0 0-13.7-6.25a59 59 0 1 0 11.67 11.67a8.24 8.24 0 0 0 2.03-5.42M64 121A57 57 0 1 1 98.1 18.36a8.27 8.27 0 0 0 11.53 11.53A57 57 0 0 1 64 121" /></g></svg> }
    ],
    backend: [
        { name: 'Node.js', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 289"><path fill="#539E43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571" /></svg> },
        { name: 'Express', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#0F0F0F" d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"/></g></svg> },
        { name: 'Firebase', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 351"><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z" /><path fill="#FFA712" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z" /><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z" /><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.13 24.13 0 0 0 23.513.005" /></svg> },
        { name: 'C#', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#7c3aed" d="M7 5.5a2.5 2.5 0 1 0 1.81 4.225a.75.75 0 0 1 1.086 1.035a4 4 0 1 1-.01-5.53a.75.75 0 0 1-1.082 1.04A2.49 2.49 0 0 0 7 5.5" /><path fill="#7c3aed" d="M6.586.102a.75.75 0 0 1 .756 0l4.715 2.75a.75.75 0 0 1-.756 1.296l-4.337-2.53L1.5 4.806v6.388l5.464 3.188l4.337-2.53a.75.75 0 1 1 .755 1.296l-4.714 2.75a.75.75 0 0 1-.756 0L.372 12.273A.75.75 0 0 1 0 11.625v-7.25a.75.75 0 0 1 .372-.648z" /></svg> }
    ],
    database: [
        { name: 'MongoDB', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#023430" rx="60" /><path fill="#10AA50" d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773" /></g></svg> },
        { name: 'MySQL', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 349"><path fill="#00758F" d="m152.31 230.297l15.56 50.487c3.496 11.463 4.954 19.465 4.37 24.026q12.765-34.188 17.839-74.513h18.71q-12.069 65.65-31.827 95.41c-10.262 15.289-21.504 22.933-33.746 22.933c-3.264 0-7.288-.986-12.063-2.944v-10.55c2.333.342 5.07.525 8.218.525q8.565-.002 13.816-4.742c4.193-3.849 6.292-8.175 6.292-12.97c0-3.274-1.637-9.993-4.896-20.157l-21.68-67.505z" /><path fill="#F29111" d="M352.498 197.51c30.657 0 45.986 19.586 45.986 58.739c0 21.276-4.61 37.347-13.821 48.204c-1.66 1.984-3.495 3.698-5.427 5.286l21.695 10.727l-.021-.001l-7.703 13.302l-28.253-16.485q-7.026 2.08-15.451 2.08c-15.053 0-26.297-4.387-33.731-13.15c-8.16-9.694-12.238-24.955-12.238-45.757c0-21.156 4.602-37.166 13.816-48.037c8.392-9.944 20.11-14.909 35.148-14.909" /></svg> },
        { name: 'Firestore', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#ffa726" d="m5.8 24.6l.17-.237l8.02-15.214l.017-.161l-3.535-6.64a.656.656 0 0 0-1.227.207Z" /></svg> }
    ],
    tools: [
        { name: 'Git', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501" /></svg> },
        { name: 'Bootstrap', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#7952B3" d="M11.398 121.43v-17.738h5.047q2.3 0 3.649 1.126q1.348 1.125 1.348 2.931q0 1.51-.816 2.623q-.817 1.113-2.252 1.583v.05q1.794.21 2.87 1.36q1.076 1.138 1.076 2.969q0 2.276-1.632 3.686q-1.633 1.41-4.12 1.41z" /></svg> },
        { name: 'Material UI', icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#0073E6" fillRule="evenodd" d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6Z" clipRule="evenodd" /></svg> }
    ]
}

function AboutMe() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.83, 0, 0.17, 1]
            }
        }
    }

    return (
        <div className={styles.containerAboutMe}>
            <motion.div
                className={styles.contentAboutMe}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header Section */}
                <motion.div className={styles.headerSection} variants={itemVariants}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>◆</span>
                        <span>Detrás del código</span>
                    </div>
                    <h2 className={styles.mainTitle}>
                        <span className={styles.titleLine1}>Construyendo experiencias</span>
                        <span className={styles.titleLine2}>digitales innovadoras</span>
                    </h2>
                    <p className={styles.description}>
                        Con una formación en la Universidad Tecnológica Nacional y una mentalidad enfocada en la mejora constante, 
                        he desarrollado diversos proyectos personales que me han permitido afianzar mis habilidades. Desde la gestión 
                        de usuarios hasta la creación de plataformas adaptadas a mis propias necesidades, cada desafío ha sido una 
                        oportunidad para crecer profesionalmente y perfeccionar mis conocimientos en tecnologías.
                    </p>
                </motion.div>

                {/* Tech Stack Grid */}
                <motion.div className={styles.bentoGrid} variants={itemVariants}>
                    {/* Frontend - Large Card */}
                    <motion.div 
                        className={`${styles.bentoCard} ${styles.bentoLarge}`}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                        <div className={styles.cardGlow}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>◇</span>
                                <h3>Desarrollo Front-End</h3>
                            </div>
                            <div className={styles.techIconGrid}>
                                {techStack.frontend.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        className={styles.techItem}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                    >
                                        <div className={styles.techIcon}>{tech.icon}</div>
                                        <span className={styles.techName}>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend - Medium Card */}
                    <motion.div 
                        className={`${styles.bentoCard} ${styles.bentoMedium}`}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                        <div className={styles.cardGlow}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>◈</span>
                                <h3>Desarrollo Back-End</h3>
                            </div>
                            <div className={styles.techIconGrid}>
                                {techStack.backend.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        className={styles.techItem}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                    >
                                        <div className={styles.techIcon}>{tech.icon}</div>
                                        <span className={styles.techName}>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Database - Medium Card */}
                    <motion.div 
                        className={`${styles.bentoCard} ${styles.bentoMedium}`}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                        <div className={styles.cardGlow}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>◉</span>
                                <h3>Bases de Datos</h3>
                            </div>
                            <div className={styles.techIconGrid}>
                                {techStack.database.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        className={styles.techItem}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                    >
                                        <div className={styles.techIcon}>{tech.icon}</div>
                                        <span className={styles.techName}>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tools - Small Card */}
                    <motion.div 
                        className={`${styles.bentoCard} ${styles.bentoSmall}`}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                        <div className={styles.cardGlow}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>◆</span>
                                <h3>Herramientas</h3>
                            </div>
                            <div className={styles.techIconGrid}>
                                {techStack.tools.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        className={styles.techItem}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                    >
                                        <div className={styles.techIcon}>{tech.icon}</div>
                                        <span className={styles.techName}>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default AboutMe
