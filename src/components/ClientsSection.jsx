import ClientCardMobile from "./ClientCardMobile";
import styles from "./ClientsSection.module.css";

const ClientsSection = () => {
  return (
    <div className={styles.clientsSection}>
      <div className={styles.clientCards}>
        <h2 className={styles.clients}>Clients</h2>
        <div className={styles.clientsCards}>
          <ClientCardMobile authorImages="/author-images@2x.png" />
          <ClientCardMobile
            authorImages="/author-images-1@2x.png"
            propFlex="1"
            propMinWidth="236px"
            propAlignSelf="unset"
          />
          <ClientCardMobile
            authorImages="/author-images-2@2x.png"
            propFlex="1"
            propMinWidth="236px"
            propAlignSelf="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
