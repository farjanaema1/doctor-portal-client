import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const[isAdmin] = useAdmin(user?.email);
    const location = useLocation();
    const {user,loading} = useContext(AuthContext)
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user && isAdmin ) {
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
}
export default AdminRoute;