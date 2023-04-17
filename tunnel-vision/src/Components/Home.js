import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Welcome Home!</h1>
            <button className='button'>
                <Link to='../logout' className='noStyle'>
                    Logout
                </Link>
            </button>
        </>
    )
}

export default Home;
