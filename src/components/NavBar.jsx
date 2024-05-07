import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.loopIterator}>
        <div className={styles.functionCaller}>
          <div className={styles.constantHolder}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameItem} alt="" src="/polygon-1.svg" />
            </div>
          </div>
          <a href="/" className={styles.embrace}>Marketing Hub</a>
        </div>
      </div>
      <div className={styles.navbarInner}>
        <div className={styles.howItWorksParent}>
          <a href="/how-it-works" className={styles.howItWorks}>How it Works</a>
          <a href="/our-work" className={styles.ourWork}>Our Work</a>
          <a href="/pricing" className={styles.pricing}>Pricing</a>
          <a href="/about-us" className={styles.aboutUs}>About Us</a>
        </div>
      </div>
      <a href="/book-a-call" className={styles.ctaButton}>
        <div className={styles.bookACall}>Book a call</div>
      </a>
    </header>
  );
};

export default NavBar;
