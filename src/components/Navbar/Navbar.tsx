import styles from './Navbar.module.css'
import { motion } from "framer-motion";
function NavBar({ scrollContainerRef, welcomeRef, visibleSection }: any) {
    const isWelcome = visibleSection === "welcome";
    const fullName = "Lautaro Nahuel García";

    const scrollToSection = (ref: any) => {
        const scrollContainer = scrollContainerRef.current;
        const offset = 50;

        if (scrollContainer && ref?.current) {
            if (ref === welcomeRef) {
                scrollContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
            else if (ref?.current) {
                const elementTop = ref.current.offsetTop;
                scrollContainer.scrollTo({
                    top: elementTop - offset,
                    behavior: 'smooth',
                });
            }
        }
    };



    const getNameColor = () => {
        switch (visibleSection) {
            case 'welcome': return '#fdb500';
            case 'aboutMe': return '#111111 ';
            case 'myWork': return '#fdb500';
            case 'contact': return '#111111';
            default: return '#fdb500';
        }
    };

    return (
        <header className={styles.contentNavbar}>
            <motion.button
                className={styles.btnNav}
                animate={{ gap: 0 }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={()=>scrollToSection(welcomeRef)}
            >
                {fullName.split(" ").map((word, wordIndex) => {
                    return (
                        <span key={wordIndex} className={styles.wordContainer}>
                            {word.split("").map((letter, index) => {
                                const isPersistent = ["L", "N", "G"].includes(letter);

                                return (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: isWelcome || isPersistent ? 1 : 0,
                                            x: isWelcome ? 0 : isPersistent ? 0 : -2, 
                                            display: isPersistent || isWelcome ? "inline-block" : "none", 
                                        }}
                                        transition={{ duration: 0.1, delay: index * 0.03 }}
                                        className={`${styles.nameLetter} ${isPersistent ? styles.persistent : styles.hidden}`}
                                        style={{
                                            color: getNameColor(),
                                            fontWeight: isPersistent ? 700 : 400
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                );
                            })}
                        </span>
                    );
                })}
            </motion.button>
        </header>
    );
}


export default NavBar