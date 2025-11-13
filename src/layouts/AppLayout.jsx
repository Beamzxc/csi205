import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";

const AppLayout = ({ products, carts, role, handleLogout }) => {
    return ( 
        <>
        <AppHeader />
        <AppNavbar products={products} carts={carts} role={role} handleLogout={handleLogout} />
        <Outlet />
        <AppFooter />
        </>
     );
}

export default AppLayout;