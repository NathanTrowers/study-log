import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSingleLogId } from '../Slice/LogsSlice';
import './_styles/Logs.css';

const LogCard = ({ _id, subject, ratedUnderstanding,
    date, startTime, endTime, 
    duration, details }) => {
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(setSingleLogId(_id));
    }

    return (
        <div data-test='log-card' className='logCard'>
            <p data-test='subject-name'>Subject: {subject}</p>
            <p>Rated Understanding: {ratedUnderstanding}</p>
            <p>Date: {date}</p>
            <p>Start Time: {startTime}</p>
            <p>End Time: {endTime}</p>
            <p>Duration: {duration}</p>
            <p>Details: {details}</p>
            <button className='button' onClick={handleUpdate}>
                <Link to={`../log/${_id}`} className='noStyle accessibleLink'>
                    Update Log
                </Link>
            </button>
        </div>
    )
}

export default LogCard;
