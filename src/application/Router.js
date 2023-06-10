import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Login from '../component/Login';
import LoginPublic from '../component/LoginPublic';
import UpdateUserLogin from '../component/UpdateUserLogin';
import PasswordUpdateUserLogin from '../component/PasswordUpdateUserLogin';
import PrivateRoute from '../component/PrivateRoute';
import PrivateRoutePublic from '../component/PrivateRoutePublic';
import ErrPage from '../pages/ErrPage';
import TasksPrivate from '../pages/TasksPrivate';
import TasksPublic from '../pages/TasksPublic';
import NavBar from '../component/NavBar';

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route element={<Layout />} >
                <Route exact path="/" element={<PrivateRoutePublic component={TasksPublic} />} />
                <Route path="/tlogin" element={<LoginPublic />} />
                <Route exact path="/mistareas" element={<PrivateRoute component={TasksPrivate} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/updateUser" element={<UpdateUserLogin />} />
                <Route path="/pwd" element={<PasswordUpdateUserLogin />} />
                <Route path="*" element={<ErrPage />} />
            </Route>
        </Routes>
    </BrowserRouter >
)
export default Router;

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}