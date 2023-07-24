import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTime } from '../Slice/TimeSlice';
import { formatDate, formatTime } from '../../Utils/DataFormatter';
import { countTime } from '../../Utils/Stopwatch';
import './_styles/StudySession.css';

const StudySession = () => {
    const [startTime, setStartTime] = useState();
    const [isStopped, setIsStopped] = useState(false);
    const [clock, setClock] = useState('00:00:00:000');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setStartTime(new Date());
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(t => countTime(t));
        }, 10);

        if (isStopped) {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isStopped]);

    const handleClick = event => {
        const unformattedEndTime = new Date();
        setIsStopped(true);
        const duration = clock;
        const endTime = formatTime(unformattedEndTime);
        const date = formatDate(unformattedEndTime.toISOString());

        dispatch(setTime({
            duration: duration,
            date: date,
            startTime: formatTime(startTime),
            endTime: endTime
        }));
        navigate('/new-log');
    }

    return (
        <>
            <h2 id='clock'>
                { clock }
            </h2>

            <button 
                className='button'
                name='new-log-button'
                value='submit'
                onClick={handleClick}
            >
                Stop Studying
            </button>
        </>
    )
}

export default StudySession;
