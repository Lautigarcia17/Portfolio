import styles from './Projects.module.css'
import { projects } from '../../../utilities/projects';
import ProjectItem from '../../../components/ProjectItem/ProjectItem';
import { Project } from '../../../types/project';

function Projects() {

    const arrayProjects: Project[] = projects;

    return (
        <>
            <div className={styles.containerProjects}>
                <div className={styles.contentProjects}>
                    <div className={styles.headerProjects}>
                        <h1 className={styles.titleHeader}> De Mi Mente al Código </h1>
                    </div>

                    <div className={styles.projects}>
                        {arrayProjects.map((project: Project, index: number) => (
                            <ProjectItem project={project} key={index} />
                        ))}
                    </div>
                </div>
            </div>



        </>

    )
}


export default Projects

