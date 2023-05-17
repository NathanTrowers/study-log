import { Route, Routes } from  'react-router-dom';
import Welcome from '../Welcome';
import Home from '../Home';
import Login from '../Authentication/Login';
import Logout from '../Authentication/Logout';
import Register from '../Authentication/Register';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/home' element={<Home />} />
            <Route path='/sign-up' element={<Register />} />
        </Routes>
    );
}

export default AppRoutes;
