import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.ctaBanner2Wrapper}>
      <div className={styles.ctaBanner2}>
        <div className={styles.ctaBanner2Child} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <div className={styles.ctaBanner2Inner}>
          <div className={styles.startYourJourneyWithUsNowParent}>
            <h1 className={styles.startYourJourney}>
              start your journey with us now
            </h1>
            <button className={styles.startNowWrapper}>
              <div className={styles.startNow}>Start Now</div>
            </button>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
            <img
              className={styles.shapeContainerIcon}
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
