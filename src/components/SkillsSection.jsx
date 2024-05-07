import Skill from "./Skill";
import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skills}>
        <Skill
          imagePlaceholder="/image-placeholder@2x.png"
          mainTitle="Product design"
        />
        <Skill
          imagePlaceholder="/image-placeholder-1@2x.png"
          mainTitle="Art direction"
        />
        <Skill
          imagePlaceholder="/image-placeholder-2@2x.png"
          mainTitle="Visual design"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
