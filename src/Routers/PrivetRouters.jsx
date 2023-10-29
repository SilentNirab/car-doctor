import { useContext } from "react";
import { AuthContext } from "../Provieders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouters = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56 mx-auto"></progress>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivetRouters;