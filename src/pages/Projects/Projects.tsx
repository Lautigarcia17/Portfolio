import Footer from '../../components/Footer/Footer';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { Project } from '../../types/project';
import { projects } from '../../utilities/projects';
import styles from './Projects.module.css'



function Projects() {

    const arrayProjects: Project[] = projects;

    return (
        <>
            <div className={styles.containerProjects}>
                <div className={styles.contentProjects}>
                    <div className={styles.headerProjects}>
                        <h1 className={styles.titleHeader}> Mis Proyectos </h1>
                        <h2 className={styles.subtitleHeader}>Experiencia construida a través de cada línea de código.</h2>
                    </div>

                    <div className={styles.projects}>
                        {arrayProjects.map((project: Project, index: number) => (
                            <ProjectItem project={project} key={index}/>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>



        </>

    )
}


export default Projects

