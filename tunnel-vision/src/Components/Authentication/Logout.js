import { useState, useEffect } from 'react';
import { post } from "../../Utils/Request";

const Logout = () => {
    const [message, setMessage] = useState();
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

    return (
        <h1 data-test='message'>
            {message}
        </h1>
    );
}

export default Logout;
