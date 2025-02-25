import { Tooltip, Typography } from '@mui/material';
import { SectionIndicatorProps } from '../../types/interfaces/SectionIndicatorProps';
import styles from './SectionIndicator.module.css'





const SectionIndicator = ({ currentSection, handleScrollToSection, welcomeRef, aboutMeRef, projectsRef, contactRef }: SectionIndicatorProps) => {
  const sectionRefs: any = {
    welcome: welcomeRef,
    aboutMe: aboutMeRef,
    myWork: projectsRef,
    contact: contactRef,
  };
  const sectionIds = ['welcome', 'aboutMe', 'myWork', 'contact'];

  const sectionNamesInSpanish: Record<string, string> = {
    welcome: 'Inicio',
    aboutMe: 'Sobre mí',
    myWork: 'Mi trabajo',
    contact: 'Contacto',
  };

  return (
    <div className={styles.indicatorContainer}>
      {sectionIds.map((sectionId) => (
        <Tooltip key={sectionId} title={
          <Typography fontSize={16} fontFamily={"Croissant One"}>

            {sectionNamesInSpanish[sectionId]}
          </Typography>
        }
          placement="left" arrow slotProps={{
            tooltip: {
              sx: {
                color: currentSection === 'myWork' ? "#111111" : '#eae4d4',
                backgroundColor: currentSection === 'myWork' ? '#eae4d4' : "#111111",
                borderRadius: '8px'
              },
            },
            arrow: {
              sx: {
                color: currentSection === 'myWork' ? "#eae4d4" : '#111111',
              }
            }
          }}>

          <div
            key={sectionId}
            className={`${styles.indicator} 
            ${currentSection === sectionId ? styles.active : ''}  
            ${currentSection === 'myWork' && currentSection === sectionId ? styles.activeProjects : ''}`
            }
            onClick={() => handleScrollToSection(sectionRefs[sectionId])}
          />
        </Tooltip>
      ))}

    </div>
  );
};

export default SectionIndicator;


