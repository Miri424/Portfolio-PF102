const Login = ({ setisLogged }) => {
  const handleLogin = () => {
    setisLogged(true);
  };
  
  return (
    <>
      <button onClick={handleLogin} className="btn-login">
        Login
      </button>
    </>
  );
};

export default Login;
