import { motion } from 'framer-motion';
import { useLanguage } from '../../../hooks/useLanguage';
import styles from './WelcomeSection.module.css';
import { Me } from '../../../assets/index';


function WelcomeSection() {
    const { translations } = useLanguage();
    const handleRedirect = (url: string) => {
        window.open(url, '_blank');
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className={styles.containerWelcome}>
            {/* Animated Grid Background */}
            <div className={styles.gridBackground}>
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={styles.gridLine}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{
                            duration: 3,
                            delay: i * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Floating Particles */}
            <div className={styles.particlesContainer}>
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={styles.particle}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: 0
                        }}
                    />
                ))}
            </div>

            <div className={styles.contentWelcome}>
                {/* Hero Content - Asymmetric Layout */}
                <div className={styles.heroGrid}>
                    {/* Left: Main Content */}
                    <motion.div
                        className={styles.heroLeft}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                    >
                        <motion.div
                            className={styles.badge}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className={styles.badgeDot} />
                            <span>{translations.welcome.badge}</span>
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Lautaro Nahuel
                            <br />
                            <span className={styles.titleGradient}>Garcia</span>
                        </motion.h1>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {translations.welcome.description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className={styles.ctaGroup}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.button
                                className={styles.ctaPrimary}
                                onClick={() => scrollToSection('work')}
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 249, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{translations.welcome.cta.primary}</span>
                                <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.button>

                            <motion.button
                                className={styles.ctaSecondary}
                                onClick={() => scrollToSection('contact')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{translations.welcome.cta.secondary}</span>
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className={styles.socialLinks}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            {[
                                { icon: 'linkedin', url: 'https://www.linkedin.com/in/lautarongarcia/' },
                                { icon: 'github', url: 'https://github.com/Lautigarcia17' },
                                { icon: 'email', url: 'mailto:lautaronhgarcia@gmail.com' }
                            ].map((social, index) => (
                                <motion.button
                                    key={social.icon}
                                    className={styles.socialButton}
                                    onClick={() => handleRedirect(social.url)}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                >
                                    {social.icon === 'linkedin' && (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                    )}
                                    {social.icon === 'github' && (
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                        </svg>
                                    )}
                                    {social.icon === 'email' && (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 6l-10 7L2 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Image with 3D Effects */}
                    <motion.div
                        className={styles.heroRight}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.3 }}
                    >
                        <div className={styles.imageContainer}>
                            <motion.div
                                className={styles.imageGlow}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className={styles.imageFrame}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img src={Me} alt="Lautaro García" className={styles.image} />
                            </motion.div>
                            
                            {/* Floating decorative elements */}
                            <motion.div
                                className={styles.floatingShape1}
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            <motion.div
                                className={styles.floatingShape2}
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [360, 180, 0]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5 },
                        y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    onClick={() => scrollToSection('about')}
                >
                    <span>{translations.welcome.scroll}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
}

export default WelcomeSection;