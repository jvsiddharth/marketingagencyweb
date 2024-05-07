import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation2 from "../components/Navigation2";
import LogosSection1 from "../components/LogosSection1";
import SkillsSection1 from "../components/SkillsSection1";
import LatestWorkSection1 from "../components/LatestWorkSection1";
import ClientsSection1 from "../components/ClientsSection1";
import Footer1 from "../components/Footer1";
import styles from "./PxPortfolioTemplate1.module.css";

const PxPortfolioTemplate1 = () => {
  const navigate = useNavigate();

  const onMenuIconClick = useCallback(() => {
    navigate("/375px-about-page");
  }, [navigate]);

  const onDiscordIconClick = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onFacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/animaapp/");
  }, []);

  const onDribbbleIconClick = useCallback(() => {
    window.open("https://dribbble.com/animaapp");
  }, []);

  const onNstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/?hl=en");
  }, []);

  const onBehanceIconClick = useCallback(() => {
    window.open("https://www.behance.net/Anima_design");
  }, []);

  return (
    <div className={styles.pxPortfolioTemplate}>
      <Navigation2 onMenuIconClick={onMenuIconClick} />
      <section className={styles.header}>
        <div className={styles.header1}>
          <div className={styles.headlineSubhead}>
            <div className={styles.headlineSubhead1}>
              <div className={styles.brandingImage}>
                Branding | Image making
              </div>
              <h1 className={styles.visualDesigner}>Visual Designer</h1>
            </div>
            <div className={styles.thisIsA}>
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </div>
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
        </div>
      </section>
      <section className={styles.logosSectionParent}>
        <LogosSection1 />
        <SkillsSection1 />
      </section>
      <LatestWorkSection1 />
      <ClientsSection1 />
      <Footer1
        onDiscordIconClick={onDiscordIconClick}
        onFacebookIconClick={onFacebookIconClick}
        onDribbbleIconClick={onDribbbleIconClick}
        onNstagramIconClick={onNstagramIconClick}
        onBehanceIconClick={onBehanceIconClick}
      />
    </div>
  );
};

export default PxPortfolioTemplate1;
