import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Nabvar from "../Pages/Shared/Navbar/Nabvar";


const Root = () => {
    return (
        <div> 
            <Nabvar></Nabvar>   
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;