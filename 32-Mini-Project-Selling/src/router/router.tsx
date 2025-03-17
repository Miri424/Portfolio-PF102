import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "../pages/client/main";
import NotFound from "../pages/client/error/NotFound";
import AdminLayout from "../pages/admin/main";
import Home from "../pages/client/home/HomePage";
import BasketPage from "../pages/client/cart/CartPage";
import ProductDetails from "../pages/client/Details/Details";
import WishlistPage from "../pages/client/Wishlist/Wishlist";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="add-product" element={<AddProduct />} /> */}
          {/* <Route path="product-table" element={<ProductTable />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
