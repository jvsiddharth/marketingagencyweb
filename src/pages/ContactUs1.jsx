import FrameComponent from "../components/FrameComponent15";
import styles from "./ContactUs1.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <img
        className={styles.unsplashtyandmpxwhcIcon}
        loading="lazy"
        alt=""
        src="/unsplashtyandmpxwhc1@2x.png"
      />
      <div className={styles.contactUsInner}>
        <div className={styles.contactUsParent}>
          <h1 className={styles.contactUs1}>Contact Us</h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <form className={styles.componentParent}>
                <FrameComponent fullName="Full Name" />
                <FrameComponent
                  fullName="E-mail"
                  propDisplay="inline-block"
                  propMinWidth="104px"
                />
                <div className={styles.instanceParent}>
                  <FrameComponent
                    fullName="Message"
                    propDisplay="unset"
                    propMinWidth="unset"
                  />
                  <button className={styles.contactUsWrapper}>
                    <div className={styles.contactUs2}>Contact Us</div>
                  </button>
                </div>
              </form>
              <div className={styles.frameGroup}>
                <div className={styles.contactParent}>
                  <b className={styles.contact}>Contact</b>
                  <div className={styles.higreencom}>hi@green.com</div>
                </div>
                <div className={styles.basedInParent}>
                  <b className={styles.basedIn}>Based in</b>
                  <div className={styles.losAngelesCaliforniaContainer}>
                    <p className={styles.losAngeles}>Los Angeles,</p>
                    <p className={styles.california}>California</p>
                  </div>
                </div>
                <div className={styles.facebookNegativeParent}>
                  <img
                    className={styles.facebookNegative}
                    loading="lazy"
                    alt=""
                    src="/facebook--negative1.svg"
                  />
                  <img
                    className={styles.instagramNegative}
                    loading="lazy"
                    alt=""
                    src="/instagram--negative1.svg"
                  />
                  <img
                    className={styles.twitterNegative}
                    loading="lazy"
                    alt=""
                    src="/twitter--negative1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
