import { useMemo } from "react";
import styles from "./Persona.module.css";

const Persona = ({ propMinWidth }) => {
  const personaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.persona} style={personaStyle}>
      <div className={styles.image}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/"
        />
        <div className={styles.imageOutline} />
      </div>
      <div className={styles.designerFullNameContainer}>
        <p className={styles.pabloDesignero}>
          <b className={styles.pabloDesignero1}>Pablo Designero</b>
        </p>
        <p className={styles.designerUnicorn}>{`Designer & Unicorn Trainer`}</p>
      </div>
    </div>
  );
};

export default Persona;
