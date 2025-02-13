import HeaderClient from "./Header"
import { Outlet } from "react-router"
import Footer from "./Footer"
const ClientLayout = () => {
  return (
    <div>
        <HeaderClient />
        <Outlet />
        <Footer />
    </div>
  )
}

export default ClientLayout