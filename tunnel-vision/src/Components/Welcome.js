import { Link } from 'react-router-dom';
import './_styles/Welcome.css';

const Welcome = () => {
    return (
        <>
            <h1 data-test='welcome-heading'> Welcome to the Study Web App! </h1>
            <div id='welcomeContainer'>
                <button className='button'>
                    <Link to='/login' className='noStyle accessibleLink'>
                        Login
                    </Link>
                </button>
                <button className='button'>
                    <Link to='/sign-up' className='noStyle accessibleLink'>
                        Sign-up
                    </Link>
                </button>
            </div>
        </>
    );
}

export default Welcome;
