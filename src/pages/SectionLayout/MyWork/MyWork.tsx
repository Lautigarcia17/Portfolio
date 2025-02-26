import styles from './MyWork.module.css'
import { projects } from '../../../utilities/projects';
import ProjectItem from '../../../components/ProjectItem/ProjectItem';
import { Project } from '../../../types/project';
import { useNavigate } from 'react-router-dom';
import { useGenericContext } from '../../../hooks/useGenericContext';
import { ScrollContext } from '../../../context/ScrollContext';


function MyWork() {

    const lastProject: Project = projects[0];

     const { scrollContainerRef } = useGenericContext(ScrollContext);
    const navigate = useNavigate();

    const handleClick = () => {
        const scrollContainer:any = scrollContainerRef.current;
        setTimeout(() => {
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'instant',
            });
          }, 50); 
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

