import styles from "./SkillsSection1.module.css";

const SkillsSection1 = () => {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <div className={styles.skill1}>
            <div className={styles.skill2}>
              <img
                className={styles.imagePlaceholderIcon}
                loading="lazy"
                alt=""
                src="/image-placeholder1@2x.png"
              />
              <div className={styles.headlineSubhead}>
                <h3 className={styles.mainTitle}>Product design</h3>
                <div className={styles.thisIsA}>
                  This is a template Figma file, turned into code using Anima.
                  Learn more at AnimaApp.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.skill3}>
          <div className={styles.skill4}>
            <div className={styles.skill5}>
              <img
                className={styles.imagePlaceholderIcon1}
                loading="lazy"
                alt=""
                src="/image-placeholder-11@2x.png"
              />
              <div className={styles.headlineSubhead1}>
                <h3 className={styles.mainTitle1}>Art direction</h3>
                <div className={styles.thisIsA1}>
                  This is a template Figma file, turned into code using Anima.
                  Learn more at AnimaApp.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.skill6}>
          <div className={styles.skill7}>
            <div className={styles.skill8}>
              <img
                className={styles.imagePlaceholderIcon2}
                loading="lazy"
                alt=""
                src="/image-placeholder-21@2x.png"
              />
              <div className={styles.headlineSubhead2}>
                <h3 className={styles.mainTitle2}>Visual design</h3>
                <div className={styles.thisIsA2}>
                  This is a template Figma file, turned into code using Anima.
                  Learn more at AnimaApp.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection1;
