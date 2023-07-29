import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLogsForCurrentUser, setSingleLogId } from '../Slice/LogsSlice';
import { selectUser } from '../Slice/UserSlice';
import { setDeleteMessage } from '../../Utils/Message';
import { purge } from '../../Utils/Request';
import './_styles/Logs.css';

const LogCard = ({ _id, subject, ratedUnderstanding,
    date, startTime, endTime, 
    duration, details }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectUser);
    const [clickCount, setClickCount] = useState(1);
    const [deleteButtonConfig, setDeleteButtonConfig] = useState(setDeleteMessage('delete'));

    const handleDelete = async () => {
        setClickCount(c => c + 1);
        if (clickCount === 1) {
            setDeleteButtonConfig(setDeleteMessage('confirmDelete'));

            setTimeout(() => {
                setDeleteButtonConfig(setDeleteMessage('delete'));
                setClickCount(1);
            },
            5000);
        }

        console.log(clickCount);
        if (clickCount === 2) {
            const logDeleted = await purge(`/log/${_id}`, {
                userId: user.id, 
                id:     _id
            });

            logDeleted
                ? setTimeout(() => dispatch(fetchLogsForCurrentUser(user)),
                    3000)
                : setDeleteButtonConfig(setDeleteMessage(''));
        }
    }

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
            <div className='buttonContainer'>
                <button className='button' onClick={handleUpdate}>
                    <Link to={`../log/${_id}`} className='noStyle accessibleLink'>
                        Update Log
                    </Link>
                </button>
                <button className={deleteButtonConfig.class} onClick={handleDelete}>              
                    {deleteButtonConfig.text}
                </button>
            </div>
        </div>
    )
}

export default LogCard;
