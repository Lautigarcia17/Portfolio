import styles from './SectionIndicator.module.css'

const SectionIndicator = ({ currentSection }: { currentSection: string | null }) => {

  return (
    <div className={styles.indicatorContainer}>
      {['welcome', 'aboutMe', 'projects', 'contact'].map((sectionId) => (
        <div
          key={sectionId}
          className={`${styles.indicator} 
            ${currentSection === sectionId ? styles.active : ''}  
            ${currentSection === 'projects' && currentSection === sectionId ? styles.activeProjects : ''}`
          }
        />
      ))}
    </div>
  );
};

export default SectionIndicator;