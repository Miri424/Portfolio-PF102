import Banner from "../../../layouts/client/Banner/Banner";
import Products from "../../../layouts/client/Products/products";
import Experience from "../../../layouts/client/Experience/experience";
import "../../../assets/scss/main.scss";
import OurServices from "../../../layouts/client/Alt/services";
import Leadership from "../../../layouts/client/Team";

const Home = () => {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <Experience />
      </section>
      <section className="bg-white">
        <Leadership />
      </section>
      <section className="bg-white">
        <OurServices />
      </section>
    </>
  );
};

export default Home;
