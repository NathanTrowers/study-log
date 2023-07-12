import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../Slice/UserSlice';
import { post } from "../../Utils/Request";

const Logout = () => {
    const [message, setMessage] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        setMessage('Please wait while I try to sneak you out!');
        getBackEndResponse();
    }, []);

    const getBackEndResponse = async () => {
        let response = await post('/auth/logout');
         response.data?.isLoggedIn === false
            ? setMessage('You are officially out!')
            : setMessage('I messed up, we\'ll need to try again!');
    }

    if (message === 'You are officially out!') {
        dispatch(setUser(null));
        setTimeout(() => navigate('/login'), 3000);
    }

    return (
        <h1 data-test='message'>
            {message}
        </h1>
    );
}

export default Logout;
