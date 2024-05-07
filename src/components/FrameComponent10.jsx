import { useMemo } from "react";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = ({
  heroiconsSolidlightningBo,
  discovery,
  weMeetWithYouToLearnAbout,
  propWidth,
  propAlignSelf,
}) => {
  const discoveryStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={styles.majesticonsdollarCircleParent}>
      <div className={styles.majesticonsdollarCircle}>
        <img
          className={styles.heroiconsSolidlightningBolt}
          loading="lazy"
          alt=""
          src={heroiconsSolidlightningBo}
        />
      </div>
      <div className={styles.discoveryParent}>
        <h1 className={styles.discovery} style={discoveryStyle}>
          {discovery}
        </h1>
        <div className={styles.weMeetWith}>{weMeetWithYouToLearnAbout}</div>
      </div>
    </div>
  );
};

export default FrameComponent10;
