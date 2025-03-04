import { useNavigate } from "react-router-dom";
import Navbar from "../../../layouts/client/Navbar/navbar";

const NotFound = () => {
  const nav = useNavigate();

  const backToHome = () => {
    nav("/");
  };

  return (
    <>

    <Navbar />
      <button
        className="bg-white black b-radius-6 ml-6 p-xy p-x-4 mt-6 c-pointer"
        onClick={backToHome}
      >
        Go Back
      </button>
      <div className="text-center align-center pt-6 pb-6">
        <h1>
          <strong className="white">404 NOT FOUND</strong>
        </h1>
      </div>
    </>
  );
};

export default NotFound;
