import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();

  const backToHome = () => {
    nav("/");
  };

  return (
    <>
      <button
        className="bg-black white b-radius-6 ml-6 p-xy p-x-4 c-pointer"
        onClick={backToHome}
      >
        Go Back
      </button>
      <div className="text-center align-center pt-6 pb-6">
        <h1>
          <strong>404 NOT FOUND</strong>
        </h1>
      </div>
    </>
  );
};

export default NotFound;
