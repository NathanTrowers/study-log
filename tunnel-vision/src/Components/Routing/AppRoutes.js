import { Route, Routes } from  'react-router-dom';
import Welcome from '../Welcome';
import Login from '../Login';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;
