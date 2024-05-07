import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ howDoISignUpForTheProject, propWidth }) => {
  const howDoIStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.signUpBanner}>
      <div className={styles.howDoISignUp}>
        <div className={styles.howDoI} style={howDoIStyle}>
          {howDoISignUpForTheProject}
        </div>
      </div>
      <img
        className={styles.materialSymbolsaddCircleRoIcon}
        loading="lazy"
        alt=""
        src="/materialsymbolsaddcirclerounded.svg"
      />
    </div>
  );
};

export default FrameComponent1;
