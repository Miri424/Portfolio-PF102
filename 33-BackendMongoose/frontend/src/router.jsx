import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import ProductItem from "./components/ProductItem";
import UserLayout from "./userLayout";
import AddForm from "./components/AddForm";
import AdminTable from "./components/AdminTable";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<UserLayout />}> 
          <Route index element={<ProductItem />} /> 
            <Route path="/addForm" element={<AddForm /> }/>
          <Route path="details/:id" element={<Details />} />
          <Route path="/admin" element={<AdminTable />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
  );
};

export default AppRouter;