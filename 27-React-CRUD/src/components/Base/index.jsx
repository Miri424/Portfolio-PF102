// Dependencies
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import axios from 'axios';

// helper components
import Login from "../LogIn";
import Logout from "../LogOut";
import Welcome from "../Welcome";
import ProductList from "../ProductsList";
import AddProduct from "../AddProduct";

// Base Component
export default function CRUD() {
  const [products, setProducts] = useState([]);
  const [isLogged, setisLogged] = useState(false);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios(`${BASE_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if(isLogged) {
      getProducts();
    }
  }, [isLogged]); 


  return (
    <div className="container">
      {!isLogged ? (
        <Login isLogged={isLogged} setisLogged={setisLogged}/>
      ) : (
        <>
          <div className="header">
            <Welcome />
            <Logout  isLogged={isLogged} setisLogged={setisLogged} />
          </div>
          <AddProduct setProduct={setProducts} />
          <ProductList products={products} setProducts={setProducts}/>
        </>
      )}
      {!isLogged && <p className="login-message">You should login to see products.</p>}
    </div>
  );
}
