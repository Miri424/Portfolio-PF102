import "../../../assets/scss/base/utilities.scss";
import "../../../assets/scss/base/typography.scss";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.container}>
        <div className="image-section">
          <div className={styles.imageHolder}>
            <img
              className={styles.image}
              src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp"
              alt=""
            />
          </div>
          <div className={styles.experience}>
            <span className="merchant">Trusted Merchant</span>
            <p className="year">FOR 50 YEARS</p>
          </div>
        </div>
        <div className={styles.about}>
          <h3>MERCHANT COMPANY</h3>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </p>
          <button className={styles.button}>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
