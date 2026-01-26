import { motion } from 'framer-motion'
import styles from './AboutMe.module.css'

const skills = [
    {
        category: 'Frontend',
        icon: '◇',
        color: 'cyan',
        items: ['React', 'Angular', 'TypeScript', 'Ionic', 'HTML/CSS']
    },
    {
        category: 'Backend',
        icon: '◈',
        color: 'purple',
        items: ['Node.js', 'Express', 'Firebase', 'C#', 'APIs REST']
    },
    {
        category: 'Database',
        icon: '◉',
        color: 'pink',
        items: ['MongoDB', 'MySQL', 'Firestore']
    },
    {
        category: 'Tools',
        icon: '◆',
        color: 'cyan',
        items: ['Git', 'Bootstrap', 'Material UI', 'VS Code']
    }
]

const journey = [
    {
        year: '2020',
        title: 'Inicios en Programación',
        description: 'Comencé mi camino en el desarrollo web explorando HTML, CSS y JavaScript'
    },
    {
        year: '2021',
        title: 'UTN - Ingeniería en Sistemas',
        description: 'Ingresé a la Universidad Tecnológica Nacional para formarme profesionalmente'
    },
    {
        year: '2022',
        title: 'Frameworks Modernos',
        description: 'Dominé React, Angular y Node.js, creando aplicaciones full-stack completas'
    },
    {
        year: '2023-2024',
        title: 'Proyectos Reales',
        description: 'Desarrollé múltiples proyectos personales y profesionales con impacto real'
    }
]

function AboutMe() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.83, 0, 0.17, 1]
            }
        }
    }

    return (
        <div className={styles.containerAboutMe}>
            {/* Background Effects */}
            <div className={styles.bgEffects}>
                <div className={styles.bgGradient}></div>
                <div className={styles.gridPattern}></div>
            </div>

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
                        <span className={styles.badgeDot}></span>
                        <span>SOBRE MÍ</span>
                    </div>
                    <h2 className={styles.mainTitle}>
                        Transformando ideas en{' '}
                        <span className={styles.titleGradient}>experiencias digitales</span>
                    </h2>
                    <p className={styles.description}>
                        Desarrollador Full-Stack apasionado por crear soluciones web innovadoras. 
                        Con formación en la Universidad Tecnológica Nacional, combino conocimiento técnico 
                        con creatividad para construir aplicaciones que realmente marquen la diferencia.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div className={styles.skillsGrid} variants={itemVariants}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            className={`${styles.skillCard} ${styles[skill.color]}`}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className={styles.skillGlow}></div>
                            <div className={styles.skillHeader}>
                                <span className={styles.skillIcon}>{skill.icon}</span>
                                <h3>{skill.category}</h3>
                            </div>
                            <div className={styles.skillItems}>
                                {skill.items.map((item, i) => (
                                    <motion.span
                                        key={item}
                                        className={styles.skillTag}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Journey Timeline */}
                <motion.div className={styles.journeySection} variants={itemVariants}>
                    <h3 className={styles.journeyTitle}>Mi Trayectoria</h3>
                    <div className={styles.timeline}>
                        {journey.map((item, index) => (
                            <motion.div
                                key={item.year}
                                className={styles.timelineItem}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.timelineYear}>{item.year}</span>
                                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                                    <p className={styles.timelineDescription}>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div className={styles.ctaSection} variants={itemVariants}>
                    <motion.button
                        className={styles.ctaButton}
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Trabajemos juntos</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default AboutMe
