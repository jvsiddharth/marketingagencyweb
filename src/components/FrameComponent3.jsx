import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.testimonialWrapper}>
      <div className={styles.testimonial}>
        <div className={styles.whatOurClientSaidAboutUsParent}>
          <h1 className={styles.whatOurClient}>
            What Our Client Said about us
          </h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <button className={styles.frameContainer}>
                <div className={styles.contactUsParent}>
                  <div className={styles.contactUs} />
                  <img
                    className={styles.biarrowLeftShortIcon}
                    alt=""
                    src="/biarrowleftshort.svg"
                  />
                </div>
              </button>
              <button className={styles.frameButton}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.biarrowLeftShortIcon1}
                    alt=""
                    src="/biarrowleftshort-1.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/ellipse-80@2x.png"
              />
              <div className={styles.frameWrapper1}>
                <div className={styles.ameliaJosephParent}>
                  <h2 className={styles.ameliaJoseph}>Amelia Joseph</h2>
                  <div className={styles.chiefManager}>Chief Manager</div>
                </div>
              </div>
            </div>
            <div className={styles.myVisionCame}>
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.ellipseContainer}>
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-80-1@2x.png"
              />
              <div className={styles.frameWrapper2}>
                <div className={styles.jacobJoshuaParent}>
                  <h2 className={styles.jacobJoshua}>Jacob Joshua</h2>
                  <div className={styles.chiefManager1}>Chief Manager</div>
                </div>
              </div>
            </div>
            <div className={styles.iFoundThe}>
              I found the digital expertise I needed. Their
              creative-professional balance exceeded expectations. Friendly
              interactions, exceptional outcomes. For digital enchantment, it's
              got to be Embrace!
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.ellipseParent1}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-80-2@2x.png"
              />
              <div className={styles.frameWrapper3}>
                <div className={styles.jacobJoshuaGroup}>
                  <h2 className={styles.jacobJoshua1}>Jacob Joshua</h2>
                  <div className={styles.chiefManager2}>Chief Manager</div>
                </div>
              </div>
            </div>
            <div className={styles.embraceReallyNails}>
              Embrace really nails it! Creative brilliance, approachable style.
              They're the partners you want—artistry meets strategy. Thrilled
              with what they achieved!"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
