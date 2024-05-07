import FrameComponent10 from "./FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = () => {
  return (
    <section className={styles.landingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.howItWorksParent}>
            <h1 className={styles.howItWorks}>how it Works</h1>
            <div className={styles.weBelieveThat}>
              We believe that the best way to create successful marketing
              campaigns is to work closely with our clients to understand their
              goals and challenges.
            </div>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/rectangle-160@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <FrameComponent10
            heroiconsSolidlightningBo="/heroiconssolidlightningbolt.svg"
            discovery="Discovery"
            weMeetWithYouToLearnAbout="We meet with you to learn about your business, your goals, and your target audience."
          />
          <FrameComponent9
            fluentchess20Filled="/fluentchess20filled.svg"
            strategy="Strategy"
            weDevelopACustomizedMarke="We develop a customized marketing strategy that is based on your unique needs and goals."
          />
          <FrameComponent9
            fluentchess20Filled="/fluenttargetarrow16filled.svg"
            strategy="Execution"
            weDevelopACustomizedMarke="We execute our strategy using the latest digital marketing tools and techniques."
          />
          <FrameComponent10
            heroiconsSolidlightningBo="/phrulerfill.svg"
            discovery="Measurement"
            weMeetWithYouToLearnAbout="We track the results of our campaigns so that we can make adjustments as needed."
            propWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
