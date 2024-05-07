import styles from "./Navigation1.module.css";

const Navigation1 = ({
  onLogoContainerClick,
  onAboutTextClick,
  onWorkTextClick,
  onContactTextClick,
}) => {
  return (
    <header className={styles.navigation}>
      <div className={styles.logo} onClick={onLogoContainerClick}>
        <div className={styles.logo1}>Marketing Hub</div>
      </div>
      <nav className={styles.navNavMenuWrapper}>
        <nav className={styles.navNavMenu}> 
        </nav>
      </nav>
    </header>
  );
};

export default Navigation1;
