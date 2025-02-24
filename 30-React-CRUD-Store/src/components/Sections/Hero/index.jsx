import "../../../assets/scss/main.scss";

const Hero = () => {
  return (
    <div className="banner-main w-100">
      <div className="banner-container">
        <div className="banner flex-box flex-space-between ">
          <div className="banner-left">
            <div className="banner-image-holder">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png    " alt=""/>
            </div>
          </div>
          <div className="banner-right">
            <p className="blue">60% Discount</p>
                <h2 className="font-size-60 mw-40">Winter Collection</h2>
                <p className="font-size-20 mb-6">Best Cloth Collection By 2020!</p>
                <button className="banner-btn bg-blue b-radius-24 white w-45">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
