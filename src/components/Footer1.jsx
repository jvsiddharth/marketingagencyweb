import styles from "./Footer1.module.css";

const Footer1 = ({
  onDiscordIconClick,
  onFacebookIconClick,
  onDribbbleIconClick,
  onNstagramIconClick,
  onBehanceIconClick,
}) => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerInfo1}>
          <div className={styles.contactInfo}>
            <div className={styles.footerMessage}>
              <h2 className={styles.letsWorkTogether}>Let’s work together</h2>
              <div className={styles.thisIsA}>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com This is a template Figma file, turned
                into code using Anima. Learn more at AnimaApp.com
              </div>
            </div>
            <div className={styles.socialIcons}>
              <img
                className={styles.discordIcon}
                loading="lazy"
                alt=""
                src="/discord.svg"
                onClick={onDiscordIconClick}
              />
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/facebook.svg"
                onClick={onFacebookIconClick}
              />
              <img
                className={styles.dribbbleIcon}
                loading="lazy"
                alt=""
                src="/dribbble-1.svg"
                onClick={onDribbbleIconClick}
              />
              <img
                className={styles.nstagramIcon}
                loading="lazy"
                alt=""
                src="/nstagram.svg"
                onClick={onNstagramIconClick}
              />
              <img
                className={styles.behanceIcon}
                loading="lazy"
                alt=""
                src="/behance-1.svg"
                onClick={onBehanceIconClick}
              />
            </div>
          </div>
          <div className={styles.textFields}>
            <div className={styles.textFields1}>
              <div className={styles.textInputdesktop}>
                <div className={styles.writeSomething}>Name</div>
              </div>
              <div className={styles.textInputdesktop1}>
                <div className={styles.writeSomething1}>Email</div>
              </div>
              <div className={styles.textInputdesktop2}>
                <div className={styles.writeSomething2}>
                  <p className={styles.typeYourMessage}>
                    Type your message here
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.blankLine2}>&nbsp;</p>
                  <p className={styles.blankLine3}>&nbsp;</p>
                  <p className={styles.blankLine4}>&nbsp;</p>
                </div>
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.submit}>Submit</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
