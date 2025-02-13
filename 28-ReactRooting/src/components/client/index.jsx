import Footer from "./footer"
import HeaderClient from "./Header"
import { Outlet } from "react-router"

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