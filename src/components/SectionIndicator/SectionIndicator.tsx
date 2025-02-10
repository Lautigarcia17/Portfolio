import styles from './SectionIndicator.module.css'

const SectionIndicator = ({ currentSection }: { currentSection: string | null }) => {

  return (
    <div className={styles.indicatorContainer}>
      {['welcome', 'aboutme', 'projects', 'contact'].map((sectionId) => (
        <div
          key={sectionId}
          className={`${styles.indicator} ${currentSection === sectionId ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;