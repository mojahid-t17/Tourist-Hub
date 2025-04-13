import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const location =useLocation()
    // console.log(location)
    const {user,loader}=useContext(AuthContext);
    if(loader){
        return <span className="loading loading-spinner loading-lg text-center"></span>
       }
    if(user){
        return children;
    }
    return (
    <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;