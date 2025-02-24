import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/client/Home/Home";
import ProductDetails from "../pages/client/Details/ProductDetails";
import Basket from "../pages/client/Basket/Basket";
import NotFound from "../pages/client/Error/NotFound";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
import ProductTable from "../pages/admin/ProductTable";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-table" element={<ProductTable />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
