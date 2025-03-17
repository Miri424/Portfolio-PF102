import "../../../assets/scss/main.scss";

const Banner = () => {
  return (
    <div className="background-image">
      <div className="mx-auto content">
        <div className="content-holder ml-68">
          <h2 className="font-size-60 white">Shop With Us</h2>
          <p className="font-size-14 white max-w-600 pb-6 font-size-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <div className="button-holder flex-box">
            <button className="primary-button">SHOP NOW</button>
            <button className="secondary-button">CLUB MEMBERSHIP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
