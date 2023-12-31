import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provieders/AuthProvider";

const Nabvar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handelLogout = () =>{
        logOut()
        .then()
        .then(error => console.error(error))
    }
    const NavLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        {
            user ? <>
                <li><Link to="/bookings">My Bookings</Link></li>
                <li><Link> <button onClick={handelLogout}>LogOut</button></Link></li> 
            </>
           : <li><Link to={'/login'}>Login</Link></li> 
        }
        
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to={'/'}><img className="w-24" src={Logo} alt="logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nabvar;