import { useMemo } from "react";
import styles from "./WorkCard.module.css";

const WorkCard = ({
  image,
  projectTitle,
  uIArtDrection,
  propHeight,
  propAlignSelf,
  propFlex,
}) => {
  const workCardStyle = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propAlignSelf]);

  const imageIconStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={styles.workCard} style={workCardStyle}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className={styles.headlineSubhead}>
        <div className={styles.projectTitle}>{projectTitle}</div>
        <div className={styles.uiArtDrection}>{uIArtDrection}</div>
      </div>
    </div>
  );
};

export default WorkCard;
