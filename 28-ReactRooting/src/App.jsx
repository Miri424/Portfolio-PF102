import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ClientLayout from "./components/client";
import Products from "./pages/products";
import AdminLayout from "./components/admin";
import AddProduct from "./components/admin/pages/AddProduct";
import NotFound404 from "./pages/NotFound404";
import HomeAdmin from "./pages/homeAdmin";
import ProductsAdmin from "./components/admin/productsAdmin";
import ProductDetails from "./components/client/ProductDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<HomeAdmin />} />
          <Route path="dashboard" element={<ProductsAdmin />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Route>

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
