import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Login from '../component/Login';
import PrivateRoute from '../component/PrivateRoute';
import ErrPage from '../pages/ErrPage';
import TasksPrivate from '../pages/TasksPrivate';
import TasksPublic from '../pages/TasksPublic';
import NavBar from '../component/NavBar';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
                <Route path="/" element={<TasksPublic />} />
                <Route exact path="/mistareas" element={<PrivateRoute component={TasksPrivate} />} />
                <Route path="login" element={<Login />} />
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