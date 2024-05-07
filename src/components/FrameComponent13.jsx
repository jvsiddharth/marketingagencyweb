import styles from "./FrameComponent13.module.css";

const FrameComponent13 = () => {
  return (
    <div className={styles.outputAggregatorInner}>
      <div className={styles.frameParent}>
        <div className={styles.heroTitleWrapper}>
          <div className={styles.heroTitle}>
            <div className={styles.weTakeCareOfYourBrandParent}>
              <h1 className={styles.weTakeCareContainer}>
                <p className={styles.weTakeCare}>{`We Take Care of `}</p>
                <p className={styles.yourBrand}>Your Brand</p>
              </h1>
              <div className={styles.weCareAbout}>
                We care about our work and we care about our clients.
              </div>
            </div>
            <div className={styles.triangleShapeParent}>
              <div className={styles.triangleShape}>
                <input
                  className={styles.enterYourEmail}
                  placeholder="Enter your Email"
                  type="text"
                />
              </div>
              <button className={styles.triangleShape1}>
                <div className={styles.letsTalk}>Lets Talk</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-84@2x.png"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <h1 className={styles.h1}>✏️</h1>
              </div>
            </div>
            <div className={styles.unionParent}>
              <img className={styles.unionIcon} alt="" src="/union.svg" />
              <div className={styles.div}>🤌</div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/rectangle-202@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.unionGroup}>
                  <img
                    className={styles.unionIcon1}
                    alt=""
                    src="/union-1@2x.png"
                  />
                  <div className={styles.div1}>😍</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <h1 className={styles.h11}>👩🏻‍💻</h1>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <h1 className={styles.h12}>👑</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
