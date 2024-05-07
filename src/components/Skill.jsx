import styles from "./Skill.module.css";

const Skill = ({ imagePlaceholder, mainTitle }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skill1}>
        <img
          className={styles.imagePlaceholderIcon}
          loading="lazy"
          alt=""
          src={imagePlaceholder}
        />
        <div className={styles.headlineSubhead}>
          <h3 className={styles.mainTitle}>{mainTitle}</h3>
          <div className={styles.thisIsA}>
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
