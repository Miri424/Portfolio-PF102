import { useNavigate, useParams } from "react-router-dom";
import "../../../assets/scss/main.scss";
import { useGetProductByIdQuery } from "../../../redux/features/apiSlice";
import { useDispatch } from "react-redux";
import { ClipLoader } from 'react-spinners';
import { addToBasket } from "../../../redux/features/basketSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const backToHome = () => {
    nav("/");
  };

  const handleBuy = () => {
    toast.success("Product Added to Basket!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    dispatch(addToBasket(product));
  };

  if (isLoading) {
    return (
      <div className="flex-center align-center pt-40">
        <ClipLoader size={100} color="#36d7b7" />
      </div>
    );
  }
  if (error || !product) {
    return (
      <div className="text-center align-center pt-6 pb-6 mw-420 mx-auto">
        <h2>
          <strong className="red ">
            Sorry! This product has never been created or is no longer
            availaible. Check Your Connection Or Try Looking for other products.
          </strong>
        </h2>
      </div>
    );
  }

  return (
    <>
      <button
        className="bg-black white b-radius-6 ml-6 p-xy p-x-4 c-pointer"
        onClick={backToHome}
      >
        Go Back
      </button>
      <div className="product-details">
        <div className="container">
          <div className="image-box">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="info-box">
            <h1>{product.name}</h1>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
            <p className="mb-2"><strong>Category:</strong> {product.category}</p>
            <p className="mb-2"><strong>Rating :</strong> {product.rating}</p>
            <button className="add-to-cart mt-6" onClick={handleBuy}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
