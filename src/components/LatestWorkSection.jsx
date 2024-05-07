import WorkCard from "./WorkCard";
import styles from "./LatestWorkSection.module.css";

const LatestWorkSection = () => {
  return (
    <section className={styles.latestWorkSection}>
      <h2 className={styles.myLatestWork}>My latest work</h2>
      <div className={styles.workCards}>
        <div className={styles.stripe1}>
          <WorkCard
            image="/image-1@2x.png"
            projectTitle="Free Bird"
            uIArtDrection="Lynyrd Skynyrd"
          />
          <WorkCard
            image="/image-2@2x.png"
            projectTitle="Purple Haze"
            uIArtDrection="Jimi Hendrix"
            propHeight="407px"
            propAlignSelf="unset"
            propFlex="1"
          />
          <WorkCard
            image="/image-3@2x.png"
            projectTitle="You Really Got Me"
            uIArtDrection="The Kinks"
            propHeight="407px"
            propAlignSelf="unset"
            propFlex="1"
          />
        </div>
        <div className={styles.stripe2}>
          <WorkCard
            image="/image-4@2x.png"
            projectTitle="American Girl"
            uIArtDrection="Tom Petty"
            propHeight="407px"
            propAlignSelf="unset"
            propFlex="1"
          />
          <WorkCard
            image="/image-5@2x.png"
            projectTitle="Whole Lotta Love"
            uIArtDrection="Led Zeppelin"
            propHeight="407px"
            propAlignSelf="unset"
            propFlex="1"
          />
          <WorkCard
            image="/image-6@2x.png"
            projectTitle="Under Pressure "
            uIArtDrection="Queen"
            propHeight="407px"
            propAlignSelf="unset"
            propFlex="1"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestWorkSection;
