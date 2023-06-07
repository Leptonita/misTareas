import { useAuth } from '../hook/use-auth';
import { Navigate } from "react-router-dom";
/*
const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated && <Component />;
};
*/
const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;