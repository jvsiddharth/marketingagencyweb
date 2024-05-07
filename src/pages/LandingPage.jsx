import React from "react";
import NavBar from "../components/NavBar";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Bottom from "../components/Bottom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <img
        className={styles.landingPageChild}
        alt=""
        src="/rectangle-196@2x.png"
      />
      <img
        className={styles.mainContainerIcon}
        loading="lazy"
        alt=""
        src="/rectangle-200@2x.png"
      />
      <section className={styles.outputAggregator}>
        <NavBar />
        <FrameComponent13 />
      </section>
      <FrameComponent12 />
      <FrameComponent11 />
      <FrameComponent8 />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent />
      <Bottom />
      <footer className={styles.footer}>
        <div className={styles.embraceInc}>
          © 2024 Marketing Hub, Inc. - All Rights Reserved
        </div>
        <div className={styles.reflectTransform}>
          <div className={styles.termsOfUse}>Terms of use</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
