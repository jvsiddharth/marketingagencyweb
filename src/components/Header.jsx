import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerChild} />
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <div className={styles.frameParent}>
            <div className={styles.usersNumberInput}>
            <a href="/" className={styles.embrace}>Marketing Hub</a>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.primaryBtn}>
        <div className={styles.buttonText}>Contact Us</div>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </button>
    </header>
  );
};

export default Header;
