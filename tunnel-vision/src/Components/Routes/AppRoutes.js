import { Route, Routes } from  'react-router-dom';
import Login from '../Authentication/Login';
import Logout from '../Authentication/Logout';
import Register from '../Authentication/Register';
import RequireAuth from '../Authentication/RequireAuth';
import Home from '../Home';
import LogsContainer from '../Log/LogsContainer';
import NewLog from '../Log/NewLog';
import StudySession from '../Log/StudySession';
import NotFound from '../NotFound';
import Welcome from '../Welcome';

const AppRoutes = () => {
    return(
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
                <Route element={<RequireAuth />}>           
                    <Route path='/home' element={<Home />} />
                    <Route path='/logs' element={<LogsContainer />} />
                    <Route path='/study-session' element={<StudySession />} />
                    <Route path='/new-log' element={<NewLog />} /> 
                </Route>
                <Route path='*' element={<NotFound />}/>
            </Routes>
    );
}

export default AppRoutes;
