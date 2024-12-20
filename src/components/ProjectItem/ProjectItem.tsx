import { useState } from "react";
import { Project } from "../../types/project";
import styles from './ProjectItem.module.css'
import ModalVideo from "../ModalVideo/ModalVideo";

export default function ProjectItem( {project,index} : {project: Project, index : number}) {
  const [showVideo, setShowVideo] = useState(false);
  const [video, setVideo] = useState<string | null>(null);


  const handleRedirect = (url: string) => {
    window.open(url);
}

const handleVideo = (video: string | null = null) => {
    setShowVideo(!showVideo);

    if (video != null) {
        setVideo(video);
    }

}

  return (
    <>
      <div key={index} className={styles.proyect}>
        <div className={styles.imageContainer}>
          <img src={project.image} alt={project.title} className={styles.image} />
        </div>
        <div className={styles.details}>
          <h2 className={styles.titleProject}>{project.title}</h2>
          <h3 className={styles.textProject}>{project.text}
          </h3>
          <div className={styles.technologies}>
            <h3 className={styles.textTechnologies}>Tecnologias utilizadas</h3>
            <div className={styles.iconsTechnologies}>
              {project.icons.map((tech: any, index: any): any => (
                <div key={index}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={() => handleRedirect(project.github)}>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#0284c7" d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.8 6.8 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.3 9.3 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.8 6.8 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9 9 0 0 0-2.125 1.045A11.4 11.4 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9 9 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A4 4 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14" /></g></svg>
              Código
            </button>

            {project.video ? (
              <button className={styles.button} onClick={() => handleVideo(project.video)}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14"><path fill="none" stroke="#0284c7" strokeLinecap="round" strokeLinejoin="round" d="M5 8.5h4m-2-2v4m5.5-7h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1m-2.5 0v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2" /></svg>
                Video
              </button>
            ) : (
              <button className={styles.button} onClick={() => handleRedirect(project.page ?? '')}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><g fill="none"><rect width="28" height="40" x="10" y="4" stroke="#0284c7" strokeWidth="4" rx="2" /><path fill="#0284c7" stroke="#0284c7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M16 12h16v10H16z" /><path stroke="#0284c7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M16 32h8m-4 4v-8" /><rect width="4" height="4" x="27" y="33" fill="#0284c7" rx="2" /><rect width="4" height="4" x="30" y="26" fill="#0284c7" rx="2" /></g></svg>
                Página
              </button>
            )}

          </div>
        </div>

      </div>

      <ModalVideo show={showVideo} handleModalShow={handleVideo} video={video} />

    </>
  )
}
