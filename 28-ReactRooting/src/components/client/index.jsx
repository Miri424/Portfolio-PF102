import HeaderClient from "./Header"
import { Outlet } from "react-router"
import Footer from "./footer"

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