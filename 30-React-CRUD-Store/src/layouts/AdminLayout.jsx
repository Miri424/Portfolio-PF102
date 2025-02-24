import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const AdminLayout = () => {
return (
  <>
  <Navbar />
  <Outlet />
  <Footer />  
  </>
)
};

export default AdminLayout;
