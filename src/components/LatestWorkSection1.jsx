import WorkCard from "./WorkCard";
import styles from "./LatestWorkSection1.module.css";

const LatestWorkSection1 = () => {
  return (
    <section className={styles.latestWorkSection}>
      <h2 className={styles.latestWork}>Latest work</h2>
      <div className={styles.workCardsMobile}>
        <WorkCard
          image="/image-11@2x.png"
          projectTitle="Free Bird"
          uIArtDrection="Lynyrd Skynyrd"
          propHeight="unset"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <WorkCard
          image="/image-21@2x.png"
          projectTitle="Purple Haze"
          uIArtDrection="Jimi Hendrix"
          propHeight="unset"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <WorkCard
          image="/image-31@2x.png"
          projectTitle="You Really Got Me"
          uIArtDrection="The Kinks"
          propHeight="unset"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <WorkCard
          image="/image-41@2x.png"
          projectTitle="American Girl"
          uIArtDrection="Tom Petty"
          propHeight="unset"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <WorkCard
          image="/image-51@2x.png"
          projectTitle="Whole Lotta Love"
          uIArtDrection="Led Zeppelin"
          propHeight="unset"
          propAlignSelf="stretch"
          propFlex="unset"
        />
        <WorkCard
          image="/image-61@2x.png"
          projectTitle="Under Pressure "
          uIArtDrection="Queen"
          propHeight="unset"
          propAlignSelf="stretch"
          propFlex="unset"
        />
      </div>
    </section>
  );
};

export default LatestWorkSection1;
