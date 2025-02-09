const Logout = ({ setisLogged }) => { 
  const handleLogout = () => {
    setisLogged(false);
  };
  return <button onClick={handleLogout} className="btn-logout">Log Out</button>;
};

export default Logout;
