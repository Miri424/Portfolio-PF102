import React from "react";
import Table from "../../TableAdmin";

const Dashboard = ({ adminProducts, setAdminProducts }) => {
  console.log(adminProducts);
  return <Table adminProducts={adminProducts} setAdminProducts={setAdminProducts} />;
};

export default Dashboard;
