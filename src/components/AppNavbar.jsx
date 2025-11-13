import { Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = ({ products = [], carts = [], role, handleLogout }) => {
    return ( 
        <div className="d-flex justify-content-center gap-2 p-2">
           <Link to = {"home"}>
           <Button variant="outline-primary">Home</Button>
           </Link>
           <Link to = {"calculator"}>
           <Button variant="outline-primary">Calculator</Button>
           </Link>
           <Link to = {"animation"}>
           <Button variant="outline-primary">Animation</Button>
           </Link>
           <Link to = {"components"}>
           <Button variant="outline-primary">Components</Button>
           </Link>
           <Link to = {"todos"}>
           <Button variant="outline-primary">Todos</Button>
           </Link>
           <Link to = {"products"}>
           <Button variant="outline-primary">Products ({products.length})</Button>
           </Link>
           <Link to = {"carts"}>
           <Button variant="outline-primary" className="position-relative">
             Carts
             {carts.length > 0 && (
               <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                 {carts.length}
               </Badge>
             )}
           </Button>
           </Link>
           
           {role && (
             <Button 
               variant="danger" 
               onClick={handleLogout}
             >
               <i className="bi bi-box-arrow-right"></i> Logout
             </Button>
           )}
        </div>
     );
}
 
export default AppNavbar;