import styles from "./Navigation2.module.css";

const Navigation2 = ({ onLogoContainerClick, onMenuIconClick }) => {
  return (
    <header className={styles.navigation}>
      <div className={styles.logo} onClick={onLogoContainerClick}>
        <div className={styles.logo1}>Logo</div>
      </div>
      <div className={styles.headerTitle}>
        <img
          className={styles.menuIcon}
          loading="lazy"
          alt=""
          src="/menu.svg"
          onClick={onMenuIconClick}
        />
      </div>
    </header>
  );
};

export default Navigation2;
