import Footer from "../../../components/Layout/Footer";
import Hero from "../../../components/Sections/Hero";
import Product from "../../../components/Sections/Main";
import Preview from "../../../components/Sections/Preview/preview";
const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <Preview />
      </section>
    </>
  );
};

export default Home;
