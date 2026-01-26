import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './MyWork.module.css'
import { projects } from '../../../utilities/projects'
import { Project } from '../../../types/project'

function MyWork() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    // Bmovies as featured (index 1 in array)
    const featuredProject = projects[1] // Bmovies
    const otherProjects = projects.filter((_, index) => index !== 1)

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
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <div className={styles.containerProjects}>
            {/* Background */}
            <div className={styles.bgEffects}>
                <div className={styles.bgGradient}></div>
                <div className={styles.gridOverlay}></div>
            </div>

            <motion.div
                className={styles.contentProjects}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {/* Header Section - CENTERED */}
                <motion.div className={styles.headerSection} variants={itemVariants}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>PORTAFOLIO</span>
                    </div>
                    <h2 className={styles.mainTitle}>
                        Proyectos que transforman{' '}
                        <span className={styles.titleGradient}>ideas en realidad</span>
                    </h2>
                    <p className={styles.description}>
                        Soluciones web modernas diseñadas para resolver problemas reales con código limpio y experiencias de usuario excepcionales.
                    </p>
                </motion.div>

                {/* Featured Project Card */}
                <motion.div className={styles.featuredSection} variants={itemVariants}>
                    <div className={styles.featuredLabel}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <span>Proyecto Destacado</span>
                    </div>
                    
                    <div className={styles.featuredCard}>
                        <div className={styles.featuredImageWrapper}>
                            <img src={featuredProject.image} alt={featuredProject.title} />
                            <div className={styles.imageGradient}></div>
                        </div>
                        
                        <div className={styles.featuredContent}>
                            <div className={styles.featuredHeader}>
                                <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
                                {featuredProject.status && (
                                    <span className={styles.statusBadge}>{featuredProject.status}</span>
                                )}
                            </div>
                            
                            <p className={styles.featuredDescription}>{featuredProject.text}</p>
                            
                            <div className={styles.techStack}>
                                {featuredProject.icons?.slice(0, 6).map((tech, i) => (
                                    <span key={i} className={styles.techIcon}>
                                        {tech.icon}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.projectActions}>
                                {featuredProject.page && (
                                    <motion.a
                                        href={featuredProject.page}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.btnSecondary}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                                        </svg>
                                        <span>Ver Demo</span>
                                    </motion.a>
                                )}
                                {featuredProject.github && (
                                    <motion.a
                                        href={featuredProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.btnSecondary}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        <span>Ver Código</span>
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Projects Grid */}
                <motion.div className={styles.projectsSection} variants={itemVariants}>
                    <h3 className={styles.sectionTitle}>Otros Proyectos</h3>
                    
                    <div className={styles.projectsGrid}>
                        {otherProjects.map((project: Project, index: number) => (
                            <motion.div
                                key={`${project.title}-${index}`}
                                className={styles.projectCard}
                                variants={itemVariants}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                whileHover={{ y: -5 }}
                            >
                                <div className={styles.cardImageWrapper}>
                                    <img src={project.image} alt={project.title} />
                                    <div className={`${styles.cardOverlay} ${hoveredIndex === index ? styles.active : ''}`}>
                                        <div className={styles.overlayActions}>
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.iconBtn}
                                                    whileHover={{ scale: 1.1 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                </motion.a>
                                            )}
                                            {project.page && (
                                                <motion.a
                                                    href={project.page}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.iconBtn}
                                                    whileHover={{ scale: 1.1 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                                                    </svg>
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <h4 className={styles.cardTitle}>{project.title}</h4>
                                        {project.status && (
                                            <span className={styles.cardStatus}>{project.status}</span>
                                        )}
                                    </div>
                                    <p className={styles.cardDescription}>{project.text}</p>
                                    
                                    <div className={styles.cardTechs}>
                                        {project.icons?.slice(0, 6).map((tech, i) => (
                                            <span key={i} className={styles.cardTechIcon}>
                                                {tech.icon}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default MyWork

