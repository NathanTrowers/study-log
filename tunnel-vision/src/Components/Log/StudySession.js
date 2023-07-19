import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTime } from '../Slice/TimeSlice';
import { calculateDuration, formatDate, formatTime } from '../../Utils/DataFormatter';

const StudySession = () => {
    /**
     * on load, record start time*
     * show stopwatch*
     * on stop record stop time*
     */
    const [startTime, setStartTime] = useState();
    // const [isStopped, setIsStopped] = useState(false);
    const [clock, setClock] = useState(formatTime(new Date()));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setStartTime(new Date());
    }, []);


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setClock(
    //             formatTime(new Date())
    //         );
    //     }, 1);

    //     if (isStopped) {
    //         clearInterval(intervalId);
    //     }

    //     return () => clearInterval(intervalId);
    // }, []);

    const handleClick = event => {
        const unformattedEndTime = new Date();
        // setIsStopped(true);
        const duration = calculateDuration(startTime, unformattedEndTime);
        const endTime = formatTime(unformattedEndTime);
        const date = formatDate(unformattedEndTime);

        dispatch(setTime({
            duration: duration,
            date: date,
            startTime: formatTime(startTime),
            endTime: endTime
        }));
        navigate('/new-log');
    }

    return (
        <div>
            <h3>
                { clock }
            </h3>

            <button 
                className='button'
                name='new-log-button'
                value='submit'
                onClick={handleClick}
            >
                Stop Studying
            </button>
        </div>
    )
}

export default StudySession;
