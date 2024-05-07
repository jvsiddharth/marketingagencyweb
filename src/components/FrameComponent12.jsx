import styles from "./FrameComponent12.module.css";

const FrameComponent12 = () => {
  return (
    <section className={styles.partnersWrapper}>
      <div className={styles.partners}>
        <div className={styles.companiesWeWorkWithWrapper}>
          <h1 className={styles.companiesWeWork}>Companies we Work with</h1>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.companyLogoParent}>
            <img
              className={styles.companyLogoIcon}
              loading="lazy"
              alt=""
              src="/company-logo.svg"
            />
            <img
              className={styles.companyLogoIcon1}
              alt=""
              src="/company-logo-1.svg"
            />
            <img
              className={styles.companyLogoIcon2}
              alt=""
              src="/company-logo-2.svg"
            />
            <img
              className={styles.companyLogoIcon3}
              alt=""
              src="/company-logo-3.svg"
            />
            <img
              className={styles.companyLogoIcon4}
              alt=""
              src="/company-logo-4.svg"
            />
          </div>
          <div className={styles.companyLogoGroup}>
            <img
              className={styles.companyLogoIcon5}
              alt=""
              src="/company-logo-5.svg"
            />
            <img
              className={styles.companyLogoIcon6}
              alt=""
              src="/company-logo-6.svg"
            />
            <img
              className={styles.companyLogoIcon7}
              alt=""
              src="/company-logo-7.svg"
            />
            <img
              className={styles.companyLogoIcon8}
              alt=""
              src="/company-logo-8.svg"
            />
            <img
              className={styles.companyLogoIcon9}
              alt=""
              src="/company-logo-9.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
