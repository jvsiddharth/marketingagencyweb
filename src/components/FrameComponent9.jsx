import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({
  fluentchess20Filled,
  strategy,
  weDevelopACustomizedMarke,
}) => {
  return (
    <div className={styles.majesticonsdollarCircleParent}>
      <button className={styles.majesticonsdollarCircle}>
        <img
          className={styles.fluentchess20FilledIcon}
          alt=""
          src={fluentchess20Filled}
        />
      </button>
      <div className={styles.strategyParent}>
        <h1 className={styles.strategy}>{strategy}</h1>
        <div className={styles.weDevelopA}>{weDevelopACustomizedMarke}</div>
      </div>
    </div>
  );
};

export default FrameComponent9;
