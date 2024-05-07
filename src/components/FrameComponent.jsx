import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.linkNetworkWrapper}>
      <div className={styles.linkNetwork}>
        <div className={styles.signUpBannerParent}>
          <img
            className={styles.signUpBanner}
            alt=""
            src="/sign-up-banner.svg"
          />
          <FrameComponent1 howDoISignUpForTheProject="How do i sign up for the project?" />
          <img
            className={styles.signUpBanner1}
            alt=""
            src="/sign-up-banner.svg"
          />
          <FrameComponent1
            howDoISignUpForTheProject="What thing that i should prepare before starting?"
            propWidth="449px"
          />
          <img
            className={styles.signUpBanner2}
            alt=""
            src="/sign-up-banner.svg"
          />
          <FrameComponent1
            howDoISignUpForTheProject="Does my company need help for marketing advices?"
            propWidth="478px"
          />
          <img
            className={styles.signUpBanner3}
            alt=""
            src="/sign-up-banner.svg"
          />
        </div>
        <div className={styles.menuList}>
          <div className={styles.slideStack}>
            <div className={styles.newsletter}>
              <h1 className={styles.saasProductsCore}>How we can help you?</h1>
              <div className={styles.followOurNewslette}>
                Follow our newsletter. We will regulary update our latest
                project and availability.
              </div>
            </div>
            <div className={styles.socialMediaIcons}>
              <input
                className={styles.workWithUsForm}
                placeholder="Enter your Email"
                type="text"
              />
              <button className={styles.workWithUsForm1}>
                <div className={styles.letsTalk}>Lets Talk</div>
              </button>
            </div>
          </div>
          <div className={styles.rangeSlider}>
            <div className={styles.moreFaq}>more FAQ</div>
            <div className={styles.radioButtonGridWrapper}>
              <img
                className={styles.radioButtonGrid}
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
