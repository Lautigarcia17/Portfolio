import { useState } from "react";
import { Project } from "../../types/project";
import styles from './ProjectItem.module.css'
import ModalVideo from "../ModalVideo/ModalVideo";

export default function ProjectItem({ project }: { project: Project }) {
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
      <div className={styles.card} onClick={() => project.video ? handleVideo(project.video) : handleRedirect(project.page ?? '')}>
        <div className={styles.imageContainer}>
          <img src={project.image} alt="Project" className={styles.image} />
          <div className={styles.overlayText}>Último Desarrollo</div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.text}>{project.text}</p>
          <div className={styles.icons}>
            {project.icons.map((tech, index) => (
              <div key={index} className={styles.icon}>{tech.icon}</div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={(e) => { e.stopPropagation(); handleRedirect(project.github) }}>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#fdb500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5" /></svg>
              Código
            </button>

            {project.video ? (
              <button className={styles.button} onClick={(e) => { e.stopPropagation(); handleVideo(project.video) }}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fdb500" d="M2 2h20v20H2zm2 2v16h16V4zm4 2.37L17.75 12L8 17.63zm2 3.465v4.33L13.75 12z" /></svg>
                Video
              </button>
            ) : (
              <button className={styles.button} onClick={(e) => { e.stopPropagation(); handleRedirect(project.page ?? '') }}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fdb500" d="M3 19V5h18v14zm1-1h16V8H4z" /></svg>
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
