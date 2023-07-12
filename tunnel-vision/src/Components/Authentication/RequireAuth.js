import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../Slice/UserSlice';

const RequireAuth = ({ children }) => {
    const { user } = useSelector(selectUser);
    const location = useLocation();

    return user
        ? <Outlet />
        : <Navigate to='login' state={{ from: location }} replace />
}

export default RequireAuth;
