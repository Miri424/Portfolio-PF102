import FooterAdmin from "./Footer"
import HeaderAdmin from "./Header"
import { Outlet } from "react-router-dom"
import styles from "./index.module.scss"

const AdminLayout = () => {
  return (
    <div>
        <HeaderAdmin />
        <Outlet />
        <FooterAdmin />
    </div>
  )
}

export default AdminLayout