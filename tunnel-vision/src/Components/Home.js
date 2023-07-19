import { Link } from 'react-router-dom';
import './_styles/Home.css'

const Home = () => {
    return (
        <div>
            <h1>Welcome Home!</h1>
            <div id='homeContainer'>
                <button className='button'>
                    <Link to='../logout' className='noStyle accessibleLink'>
                        Logout
                    </Link>
                </button>
                <button className='button'>
                    <Link to='../logs' className='noStyle accessibleLink'>
                        Logs
                    </Link>
                </button>
                <button className='button'>
                    <Link to='../study-session' className='noStyle accessibleLink'>
                        Start Studying
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home;
