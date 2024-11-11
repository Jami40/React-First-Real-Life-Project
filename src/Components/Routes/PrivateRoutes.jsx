import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
            
        </div>
    );
};

export default PrivateRoutes;