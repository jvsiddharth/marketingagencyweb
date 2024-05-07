import { useMemo } from "react";
import styles from "./ClientCardMobile.module.css";

const ClientCardMobile = ({
  authorImages,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const clientCardMobileStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div className={styles.clientCardMobile} style={clientCardMobileStyle}>
      <div className={styles.clientCard}>
        <div className={styles.thisIsA}>
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </div>
        <div className={styles.clientInfo}>
          <img
            className={styles.authorImagesIcon}
            loading="lazy"
            alt=""
            src={authorImages}
          />
          <div className={styles.rate}>
            <div className={styles.rateStars}>
              <img
                className={styles.starIcon}
                loading="lazy"
                alt=""
                src="/star.svg"
              />
              <img
                className={styles.starIcon1}
                loading="lazy"
                alt=""
                src="/star.svg"
              />
              <img className={styles.starIcon2} alt="" src="/star.svg" />
              <img className={styles.starIcon3} alt="" src="/star.svg" />
              <img className={styles.starIcon4} alt="" src="/star.svg" />
            </div>
            <div className={styles.gemmaNolenGoogleContainer}>
              <p className={styles.gemmaNolen}>{`Gemma Nolen, `}</p>
              <p className={styles.google}>Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCardMobile;
