import { Tooltip, Typography } from '@mui/material';
import { SectionIndicatorProps } from '../../types/interfaces/SectionIndicatorProps';
import styles from './SectionIndicator.module.css'





const SectionIndicator = ({ currentSection, handleScrollToSection, welcomeRef, aboutMeRef, projectsRef, contactRef }: SectionIndicatorProps) => {
  const sectionRefs: any = {
    welcome: welcomeRef,
    aboutMe: aboutMeRef,
    projects: projectsRef,
    contact: contactRef,
  };
  const sectionIds = ['welcome', 'aboutMe', 'projects', 'contact'];
  
  const sectionNamesInSpanish: Record<string, string> = {
    welcome: 'Inicio',
    aboutMe: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
  };
  
  return (
    <div className={styles.indicatorContainer}>
      {sectionIds.map((sectionId) => (
        <Tooltip title={
          <Typography fontSize={16} fontFamily={"Croissant One"}>

            {sectionNamesInSpanish[sectionId]}
          </Typography>
            } 
          
          placement="left" arrow slotProps={{
            tooltip: {
              sx: {
                color: currentSection === 'projects' ? "#111111" :'#eae4d4'  ,
                backgroundColor: currentSection === 'projects' ?  '#eae4d4' : "#111111"  ,
                borderRadius: '8px'
              },
            },
            arrow:{
              sx:{
                color: currentSection === 'projects' ? "#eae4d4" :'#111111'  ,
              }
            }
          }}>
          
          <div
            key={sectionId}
            className={`${styles.indicator} 
            ${currentSection === sectionId ? styles.active : ''}  
            ${currentSection === 'projects' && currentSection === sectionId ? styles.activeProjects : ''}`
            }
            onClick={() => handleScrollToSection(sectionRefs[sectionId])}
          />
        </Tooltip>
      ))}

    </div>
  );
};

export default SectionIndicator;


