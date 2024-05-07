import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import LogosSection from "../components/LogosSection";
import SkillsSection from "../components/SkillsSection";
import LatestWorkSection from "../components/LatestWorkSection";
import ClientsSection from "../components/ClientsSection";
import Footer from "../components/Footer";
import styles from "./PxPortfolioTemplate.module.css";

const PxPortfolioTemplate = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onWorkTextClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples"
    );
  }, []);

  const onContactTextClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className={styles.pxPortfolioTemplate}>
      <Navigation1
        onLogoContainerClick={onLogoContainerClick}
        onAboutTextClick={onAboutTextClick}
        onWorkTextClick={onWorkTextClick}
        onContactTextClick={onContactTextClick}
      />
      <section className={styles.header}>
        <div className={styles.header1}>
          <div className={styles.headlineSubhead}>
            <div className={styles.headlineSubhead1}>
              <div
                className={styles.brandingImage}
              >{`Branding | Image making `}</div>
              <h1 className={styles.myAwesomePortfolio}>
                Our portfolio
              </h1>
            </div>
            <div className={styles.andIMade}>
              And yes, they were all satisfied.
            </div>
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </section>
      <LogosSection />
      <SkillsSection />
      <LatestWorkSection />
      <section className={styles.clientsSectionParent}>
        <ClientsSection />
        <Footer />
      </section>
    </div>
  );
};

export default PxPortfolioTemplate;
