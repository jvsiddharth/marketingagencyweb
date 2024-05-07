import styles from "./FooterSmall.module.css";

const FooterSmall = () => {
  return (
    <footer className={styles.footerSmall}>
      <div className={styles.footerSmallChild} />
      <div className={styles.footerSmallItem} />
      <div className={styles.footerSmallInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.copyright2021}>
              Copyright © 2024 Marketing Hub | All Rights Reserved
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameInner} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSmall;
