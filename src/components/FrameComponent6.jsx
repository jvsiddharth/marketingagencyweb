import FrameComponent7 from "./FrameComponent7";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = () => {
  return (
    <section className={styles.masters}>
      <div className={styles.properties}>
        <div className={styles.locks}>
          <div className={styles.unlocks}>
            <div className={styles.versionHistory}>
              <h1 className={styles.ourWork}>Our Work</h1>
            </div>
            <div className={styles.aGlimpseOf}>A glimpse of our portfolio</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <FrameComponent7 rectangle161="/rectangle-161@2x.png" apple="Apple" />
          <FrameComponent7
            rectangle161="/rectangle-161-1@2x.png"
            apple="Coca-cola"
            propWidth="140px"
            propMinWidth="unset"
          />
          <FrameComponent7
            rectangle161="/rectangle-161-2@2x.png"
            apple="Nike"
            propWidth="58px"
            propMinWidth="58px"
          />
        </div>
        <div className={styles.layout}>
          <button className={styles.seeMoreWrapper}>
            <div className={styles.seeMore}>See More</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
