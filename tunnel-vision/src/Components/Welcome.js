import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <>
            <h1 data-test='welcome-heading'> Welcome to the Study Web App! </h1>
            <button className='button'>
                <Link to='/login' className='noStyle'>
                    Login
                </Link>
            </button>
        </>
    );
}

export default Welcome;
