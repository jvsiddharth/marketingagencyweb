import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation2 from "../components/Navigation2";
import AboutHeader1 from "../components/AboutHeader1";
import Footer1 from "../components/Footer1";
import styles from "./PxAboutPage1.module.css";

const PxAboutPage1 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/375px-portfolio-template");
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
    <div className={styles.pxAboutPage}>
      <Navigation2 onLogoContainerClick={onLogoContainerClick} />
      <AboutHeader1 />
      <section className={styles.body}>
        <div className={styles.bodyText}>
          <div className={styles.text}>
            <h3 className={styles.title}>
              When I was 5, I got adbucted by a unicorn family. When they
              returned me to earth, I joined a designer school. But, fo’ real,
              what I learned with my kidnaptive family really gave an edge to my
              creative language.
            </h3>
            <div className={styles.bodyText1}>
              <div className={styles.coloredText}>
                <div className={styles.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </div>
              </div>
              <div className={styles.coloredText1}>
                <div className={styles.paragraph1}>
                  Being a human is way too complicated. Time to be a unicorn.
                </div>
              </div>
              <div className={styles.coloredText2}>
                <div className={styles.paragraph2}>
                  Try it and you’ll see. Then your Figma files are just gonna
                  fly in color, glitter, interactions and autolayout.
                </div>
              </div>
              <div className={styles.coloredText3}>
                <div className={styles.paragraph3}>
                  Also, grow a beard. Check my bio if that is not clear.
                </div>
              </div>
              <div className={styles.coloredText4}>
                <div className={styles.paragraph4}>
                  <p className={styles.availableForProjects}>
                    Available for projects, from Monday to Tuesday, mainy
                    between 14 and 16. (Unless there is a unicorn race on TV -
                    DUH -in that case, come back another day).
                  </p>
                  <p className={styles.projectsIncludeRocknroll}>
                    Projects include, RocknRoll covers, furniture refurbishing,
                    Unicorn potty training and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default PxAboutPage1;
