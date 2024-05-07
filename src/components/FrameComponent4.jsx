import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <section className={styles.landingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.privacyPolicyParent}>
          <img
            className={styles.privacyPolicyIcon}
            loading="lazy"
            alt=""
            src="/rectangle-185@2x.png"
          />
          <img
            className={styles.privacyPolicyIcon1}
            loading="lazy"
            alt=""
            src="/rectangle-184@2x.png"
          />
          <img
            className={styles.privacyPolicyIcon2}
            loading="lazy"
            alt=""
            src="/rectangle-181@2x.png"
          />
          <img
            className={styles.privacyPolicyIcon3}
            loading="lazy"
            alt=""
            src="/rectangle-182@2x.png"
          />
          <img
            className={styles.privacyPolicyIcon4}
            loading="lazy"
            alt=""
            src="/rectangle-183@2x.png"
          />
          <img
            className={styles.privacyPolicyIcon5}
            loading="lazy"
            alt=""
            src="/rectangle-186@2x.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.meetOurTeamParent}>
            <h1 className={styles.meetOurTeam}>Meet Our Team</h1>
            <div className={styles.discoverTheBrilliance}>
              Discover the brilliance behind Embrace. Our team blends innovation
              and artistry to craft digital wonders that captivate
            </div>
          </div>
          <button className={styles.learnMoreWrapper}>
            <div className={styles.learnMore}>Learn More</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
