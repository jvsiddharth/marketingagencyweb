import Persona from "./Persona";
import styles from "./AboutHeader1.module.css";

const AboutHeader1 = () => {
  return (
    <section className={styles.aboutHeader}>
      <div className={styles.aboutHeader1}>
        <Persona propMinWidth="unset" />
        <div className={styles.bioText}>
          <p className={styles.bio}>
            <b>Bio:</b>
          </p>
          <p
            className={styles.fatherOf3}
          >{`Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.`}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader1;
