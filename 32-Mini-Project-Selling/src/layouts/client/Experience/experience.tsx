import "./experience.scss";

function Experience() {
  return (
    <div className="experience-container">
      <div className="row">
        <div className="left-side">
          <img
            className="image"
            src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp"
            alt="About"
          />
          <div className="trusted">
            <span className="merchant">Trusted Merchant</span>
            <p className="year">FOR 50 YEARS</p>
          </div>
        </div>

        <div className="right-side">
          <h3>MERCHANT COMPANY</h3>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
