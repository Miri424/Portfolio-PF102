import Navbar from "../../../layouts/client/Navbar/navbar";
import Footer from "../../../layouts/client/Footer/footer";
import Banner from "../../../layouts/client/Banner/Banner";
import Products from "../../../layouts/client/Products/products";
import Experience from "../../../layouts/client/Experience/experience";
import "../../../assets/scss/main.scss"
const Home = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
      <section className="w-100 bg-white">
        <Experience />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
