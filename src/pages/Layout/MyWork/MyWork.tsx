import styles from './MyWork.module.css'
import { projects } from '../../../utilities/projects';
import ProjectItem from '../../../components/ProjectItem/ProjectItem';
import { Project } from '../../../types/project';
import { Link } from 'react-router-dom';

function MyWork() {

    const lastProject: Project = projects[1];

    return (
        <>
            <div className={styles.containerProjects}>
                <div className={styles.contentProjects}>
                    <div className={styles.headerProjects}>
                        <h1 className={styles.titleHeader}> Lo Que He Creado</h1>
                    </div>

                    <div className={styles.elements}>
                        <div className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={lastProject.image} alt="Project" className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <h2 className={styles.title}>{lastProject.title}</h2>
                                <p className={styles.text}>{lastProject.text}</p>
                                <div className={styles.icons}>
                                    {lastProject.icons.map((tech, index) => (
                                        <div key={index} className={styles.icon}>{tech.icon}</div>
                                    ))}
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.button} >
                                        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#fdb500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5" /></svg>
                                        Código
                                    </button>

                                    {lastProject.video ? (
                                        <button className={styles.button} >
                                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fdb500" d="M2 2h20v20H2zm2 2v16h16V4zm4 2.37L17.75 12L8 17.63zm2 3.465v4.33L13.75 12z" /></svg>
                                            Video
                                        </button>
                                    ) : (
                                        <button className={styles.button} >
                                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fdb500" d="M3 19V5h18v14zm1-1h16V8H4z" /></svg>
                                            Página
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className={styles.linkContainer}>
                            <Link to="/work" className={styles.buttonRedirect}>
                                <span>Ver más proyectos</span>
                                <span className={styles.arrow}>→</span>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>



        </>

    )
}


export default MyWork

