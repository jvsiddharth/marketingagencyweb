import styles from "./Bottom.module.css";

const Bottom = () => {
  return (
    <section className={styles.bottom}>
      <div className={styles.timePicker}>
        <div className={styles.colorPalette}>
          <div className={styles.shapeTransformer}>
            <div className={styles.imageEditorWrapper}>
              <div className={styles.imageEditor}>
                <div className={styles.copyrightInfo} />
                <img
                  className={styles.imageEditorChild}
                  alt=""
                  src="/polygon-1-1.svg"
                />
              </div>
            </div>
            <b className={styles.embrace}>Embrace</b>
          </div>
        </div>
        <div className={styles.symbolCreatorParent}>
          <div className={styles.symbolCreator}>
            <div className={styles.styleLibrary}>
              <img
                className={styles.riinstagramFillIcon}
                loading="lazy"
                alt=""
                src="/riinstagramfill.svg"
              />
              <img
                className={styles.bitwitterIcon}
                loading="lazy"
                alt=""
                src="/bitwitter.svg"
              />
              <img
                className={styles.icbaselineFacebookIcon}
                loading="lazy"
                alt=""
                src="/icbaselinefacebook.svg"
              />
            </div>
          </div>
          <button className={styles.contactUsWrapper}>
            <div className={styles.contactUs}>Contact Us</div>
          </button>
        </div>
      </div>
      <div className={styles.transitionEffectsWrapper}>
        <div className={styles.transitionEffects}>
          <div className={styles.soundPlayer}>
            <div className={styles.workWithUs}>Work With Us</div>
            <div className={styles.advertiseWithUs}>Advertise With Us</div>
            <div className={styles.supportUs}>Support Us</div>
            <div className={styles.businessAdvices}>Business Advices</div>
          </div>
          <div className={styles.soundPlayer1}>
            <div className={styles.privateCoaching}>Private Coaching</div>
            <div className={styles.ourWork}>Our Work</div>
            <div className={styles.ourCommitment}>Our Commitment</div>
            <div className={styles.ourTeam}>Our Team</div>
          </div>
          <div className={styles.rotateTransform}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.faqs}>FAQs</div>
            <div className={styles.reportABug}>Report a Bug</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
