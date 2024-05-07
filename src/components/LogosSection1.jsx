import styles from "./LogosSection1.module.css";

const LogosSection1 = () => {
  return (
    <div className={styles.logosSection}>
      <div className={styles.logos}>
        <div className={styles.clientMobileCard}>
          <div className={styles.stripe1}>
            <img
              className={styles.googleIcon}
              loading="lazy"
              alt=""
              src="/google1.svg"
            />
            <img
              className={styles.behanceIcon}
              loading="lazy"
              alt=""
              src="/behance1.svg"
            />
          </div>
        </div>
        <img
          className={styles.stripe2Icon}
          loading="lazy"
          alt=""
          src="/stripe-2.svg"
        />
        <div className={styles.contactInformation}>
          <img
            className={styles.awwwardsIcon}
            loading="lazy"
            alt=""
            src="/awwwards1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LogosSection1;
