import styles from './Projects.module.css'
import { projects } from '../../utilities/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Project } from '../../types/project';

function Projects() {

    const arrayProjects: Project[] = projects;




    return (
        <>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.tittleHeader}> &lt;/&gt; Proyectos </h1>
                </div>

                {arrayProjects.map((project: Project,index : number) => (
                    <ProjectItem  project={project} index={index}/>
                ))}
            </div>
        </>

    )
}


export default Projects

