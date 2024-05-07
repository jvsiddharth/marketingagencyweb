import Persona from "./Persona";
import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  return (
    <section className={styles.aboutHeader}>
      <div className={styles.aboutHeader1}>
        <Persona />
        <div className={styles.bioTextWrapper}>
          <div className={styles.bioText}>
            <p className={styles.bio}>
              <b>Bio:</b>
            </p>
            <p
              className={styles.fatherOf3}
            >{`Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
