import { Outlet } from "react-router-dom";
import Navbar from "../../layouts/client/Navbar/navbar";
import Footer from "../../layouts/client/Footer/footer";
import "../../assets/scss/main.scss"

const ClientLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <section className="bg-white">
        <Footer />
      </section>
    </>
  );
};

export default ClientLayout;
