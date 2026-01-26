import styles from './MyWork.module.css'
import { projects } from '../../../utilities/projects';
import ProjectItem from '../../../components/ProjectItem/ProjectItem';
import { Project } from '../../../types/project';
import { useNavigate } from 'react-router-dom';


function MyWork() {

    const lastProject: Project = projects[1];
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/work');
    };

    return (
        <>
            <div className={styles.containerProjects}>
                <div className={styles.contentProjects}>
                    <div className={styles.headerProjects}>
                        <h1 className={styles.titleHeader}> Lo Que He Creado</h1>
                    </div>

                    <div className={styles.elements}>
                        <ProjectItem project={lastProject}/>

                        <div className={styles.textContainer}>
                            <div className={styles.arrowRight}></div>
                        </div>

                        <div className={styles.linkContainer}>
                            <div className={styles.buttonRedirect}  onClick={handleClick}> 
                                <span>Ver más proyectos</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}


export default MyWork

