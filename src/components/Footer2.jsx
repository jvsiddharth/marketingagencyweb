import { useCallback } from "react";
import FooterInfo from "./FooterInfo";
import styles from "./Footer2.module.css";

const Footer2 = () => {
  const onDiscordIconClick = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onFacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/animaapp/");
  }, []);

  const onDribbbleIconClick = useCallback(() => {
    window.open("https://dribbble.com/animaapp");
  }, []);

  const onNstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/?hl=en");
  }, []);

  const onBehanceIconClick = useCallback(() => {
    window.open("https://www.behance.net/Anima_design");
  }, []);

  return (
    <section className={styles.footer}>
      <FooterInfo
        onDiscordIconClick={onDiscordIconClick}
        onFacebookIconClick={onFacebookIconClick}
        onDribbbleIconClick={onDribbbleIconClick}
        onNstagramIconClick={onNstagramIconClick}
        onBehanceIconClick={onBehanceIconClick}
      />
    </section>
  );
};

export default Footer2;
