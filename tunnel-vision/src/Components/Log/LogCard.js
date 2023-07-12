import './_styles/Logs.css';

const LogCard = ({ subject, ratedUnderstanding,
    date, startTime, endTime, duration, details }) => {
/**use flexbox for ordering items and give Details twice the space of the others */
    return (
        <div className='logCard'>
            <p data-test='subject-name'>Subject: {subject}</p>
            <p>Rated Understanding: {ratedUnderstanding}</p>
            <p>Date: {date}</p>
            <p>Start Time: {startTime}</p>
            <p>End Time: {endTime}</p>
            <p>Duration: {duration}</p>
            <p>Details: {details}</p>
        </div>
    )
}

export default LogCard;
