import { useMemo } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ rectangle161, apple, propWidth, propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const appleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle161}
      />
      <div className={styles.appleWrapper} style={frameDivStyle}>
        <h2 className={styles.apple} style={appleStyle}>
          {apple}
        </h2>
      </div>
    </div>
  );
};

export default FrameComponent7;
