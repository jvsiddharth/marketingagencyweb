import { useMemo } from "react";
import styles from "./FrameComponent15.module.css";

const FrameComponent = ({ fullName, propDisplay, propMinWidth }) => {
  const fullNameStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={styles.fullNameParent}>
      <div className={styles.fullName} style={fullNameStyle}>
        {fullName}
      </div>
      <img className={styles.componentChild} alt="" src="/vector-12.svg" />
    </div>
  );
};

export default FrameComponent;
