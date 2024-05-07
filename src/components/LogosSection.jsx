import styles from "./LogosSection.module.css";

const LogosSection = () => {
  return (
    <section className={styles.logosSection}>
      <div className={styles.logos}>
        <div className={styles.footerMessage}>
          <img
            className={styles.behanceIcon}
            loading="lazy"
            alt=""
            src="/behance.svg"
          />
        </div>
        <div className={styles.footerMessage1}>
          <img
            className={styles.googleIcon}
            loading="lazy"
            alt=""
            src="/google.svg"
          />
        </div>
        <img
          className={styles.appleIcon}
          loading="lazy"
          alt=""
          src="/apple.svg"
        />
        <div className={styles.footerMessage2}>
          <img
            className={styles.dribbbleIcon}
            loading="lazy"
            alt=""
            src="/dribbble.svg"
          />
        </div>
        <div className={styles.footerMessage3}>
          <img
            className={styles.awwwardsIcon}
            loading="lazy"
            alt=""
            src="/awwwards.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
