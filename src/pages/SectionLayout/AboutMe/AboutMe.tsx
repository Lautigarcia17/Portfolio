import { motion } from 'framer-motion'
import styles from './AboutMe.module.css'
import { FaReact, FaAngular, FaNodeJs, FaGitAlt, FaBootstrap, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiIonic, SiExpress, SiMongodb, SiMysql, SiMui } from 'react-icons/si'
import { TbBrandCSharp, TbBrandFirebase } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import { BiServer, BiData } from 'react-icons/bi'
import { RiToolsFill } from 'react-icons/ri'

const skills = [
    {
        category: 'Frontend',
        icon: <FaReact />,
        color: 'cyan',
        items: [
            { name: 'React', icon: <FaReact color="#61DAFB" /> },
            { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'Ionic', icon: <SiIonic color="#3880FF" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> }
        ]
    },
    {
        category: 'Backend',
        icon: <BiServer />,
        color: 'purple',
        items: [
            { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
            { name: 'Express', icon: <SiExpress color="#ffffff" /> },
            { name: 'Firebase', icon: <TbBrandFirebase color="#FFCA28" /> },
          { name: 'C#', icon: <TbBrandCSharp color="#512BD4" /> },
        ]
    },
    {
        category: 'Database',
        icon: <BiData />,
        color: 'pink',
        items: [
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
            { name: 'Firestore', icon: <TbBrandFirebase color="#FFCA28" /> }
        ]
    },
    {
        category: 'Tools',
        icon: <RiToolsFill />,
        color: 'cyan',
        items: [
            { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
            { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
            { name: 'Material UI', icon: <SiMui color="#007FFF" /> },
            { name: 'VS Code', icon: <VscCode color="#007ACC" /> }
        ]
    }
]

const journey = [
    {
        year: '2021',
        title: 'Tecnicatura en Programación',
        description: 'Inicié mi formación académica en programación, adquiriendo bases sólidas en desarrollo'
    },
    {
        year: '2022',
        title: 'Frameworks Modernos',
        description: 'Dominé React, Angular y Node.js, creando aplicaciones full-stack completas'
    },
    {
        year: '2023',
        title: 'Desarrollo Profesional',
        description: 'Profundicé en tecnologías avanzadas y metodologías ágiles de desarrollo'
    },
    {
        year: '2024',
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
                                        key={item.name}
                                        className={styles.skillTag}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                        title={item.name}
                                    >
                                        <span className={styles.skillTagIcon}>{item.icon}</span>
                                        <span className={styles.skillTagName}>{item.name}</span>
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
