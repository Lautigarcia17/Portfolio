import styles from './Projects.module.css'
import { projects } from '../../../utilities/projects';
import ProjectItem from '../../../components/ProjectItem/ProjectItem';
import { Project } from '../../../types/project';

function Projects() {

    const arrayProjects: Project[] = projects;




    return (
        <>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.titleHeader}> &lt;/&gt; Proyectos </h1>
                </div>

                <div className={styles.projects}>
                    {arrayProjects.map((project: Project, index: number) => (
                        <ProjectItem project={project} index={index} />
                    ))}
                </div>
            </div>



        </>

    )
}


export default Projects

