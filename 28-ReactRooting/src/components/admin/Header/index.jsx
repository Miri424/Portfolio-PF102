import { NavLink } from "react-router-dom"

const HeaderAdmin = () => {
  return (
    <header>
    <nav>
      <div className="container">
        <div className="navHolder">
          <div className="navLeftHolder">
            <h1>Thunder</h1>
          </div>
          <div className="navRightHolder">
            <NavLink to={"/admin"}>Home Admin</NavLink>
            <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/admin/addProduct"}>Add Product</NavLink>
            <button>
              <NavLink to={"/"}>User</NavLink>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default HeaderAdmin