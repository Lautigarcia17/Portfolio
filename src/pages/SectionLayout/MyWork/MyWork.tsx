import { motion } from 'framer-motion'
import styles from './MyWork.module.css'
import { projects } from '../../../utilities/projects'
import { Project } from '../../../types/project'

function MyWork() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1]
            }
        }
    }

    return (
        <div className={styles.containerProjects}>
            <motion.div
                className={styles.contentProjects}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header */}
                <motion.div className={styles.headerSection} variants={cardVariants}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>◇</span>
                        <span>Mis Proyectos</span>
                    </div>
                    <h2 className={styles.mainTitle}>
                        <span className={styles.titleLine1}>Experiencias</span>
                        <span className={styles.titleLine2}>digitales creadas</span>
                    </h2>
                    <p className={styles.description}>
                        Una colección de proyectos que demuestran mi pasión por crear soluciones innovadoras 
                        y experiencias de usuario excepcionales.
                    </p>
                </motion.div>

                {/* Projects Showcase */}
                <div className={styles.projectsGrid}>
                    {projects.map((project: Project, index: number) => (
                        <motion.div
                            key={`${project.title}-${index}`}
                            className={styles.projectCard}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className={styles.cardGlow}></div>
                            
                            <div className={styles.imageContainer}>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className={styles.projectImage}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.categoryBadge}>
                                    <span className={styles.categoryDot}></span>
                                    <span>{project.status || 'Full Stack'}</span>
                                </div>

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.text}</p>

                                <div className={styles.techStack}>
                                    {project.icons?.slice(0, 4).map((tech, i) => (
                                        <span key={i} className={styles.techTag}>
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.cardActions}>
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.actionButton}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            <span>GitHub</span>
                                        </motion.a>
                                    )}
                                    {project.page && (
                                        <motion.a
                                            href={project.page}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.actionButton} ${styles.primary}`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                                            </svg>
                                            <span>Ver Demo</span>
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default MyWork

