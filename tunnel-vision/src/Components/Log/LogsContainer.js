import { useDispatch , useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import LogCardList from './LogCardList';
import SearchBar from '../SearchBar';
import { fetchLogsForCurrentUser, selectLogs} from '../Slice/LogsSlice';
import { selectSearchQuery } from '../Slice/SearchQuerySlice';
import { selectUser } from '../Slice/UserSlice';

const LogsContainer = () => {
    const dispatch = useDispatch();
    let user = useSelector(selectUser).user;
    let logs = useSelector(selectLogs);
    let searchQuery = useSelector(selectSearchQuery);

    if (logs.logs.length === 0) {
        dispatch(fetchLogsForCurrentUser(user));
    }

    const filteredLogs = logs.logs.filter(log => log.subject.includes(searchQuery));

    return (
        <div id='logContainer'>
            <button className='button'>
                <Link to='../home' className='noStyle accessibleLink'>
                    Home
                </Link>
            </button>

            <SearchBar />

            {logs.loading && <div>Loading...</div>}
            {!logs.loading && logs.error 
               && <div>Something went wrong: {logs.error}</div>
            }
            <div data-test='logs-section'>
                {!logs.loading && filteredLogs &&
                    <LogCardList 
                        logs={filteredLogs}
                    />
                }
            </div>
        </div>
    )
}

export default LogsContainer;
