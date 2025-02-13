import { NavLink } from "react-router-dom";

const HeaderClient = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="navHolder">
            <div className="navLeftHolder">
              <h1>Thunder</h1>
            </div>
            <div className="navRightHolder">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/products"}>Products</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <button>
                <NavLink to={"/admin"}>Admin</NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderClient;
