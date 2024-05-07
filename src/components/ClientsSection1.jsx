import ClientCardMobile from "./ClientCardMobile";
import styles from "./ClientsSection1.module.css";

const ClientsSection1 = () => {
  return (
    <section className={styles.clientsSection}>
      <div className={styles.clientCards}>
        <h2 className={styles.clients}>Clients</h2>
        <div className={styles.clientsCards}>
          <ClientCardMobile
            authorImages="/author-images1@2x.png"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
          <ClientCardMobile
            authorImages="/author-images-11@2x.png"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
          <ClientCardMobile
            authorImages="/author-images-21@2x.png"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection1;
