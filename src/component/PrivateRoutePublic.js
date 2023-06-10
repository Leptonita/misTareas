import { useAuthPublic } from '../hook/use-auth-public';
import { Navigate } from "react-router-dom";
/*
const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated && <Component />;
};
*/
const PrivateRoutePublic = ({ component: Component }) => {
    const { isAuthenticated } = useAuthPublic();
    return isAuthenticated ? <Component /> : <Navigate to="/tlogin" />;
};

export default PrivateRoutePublic;