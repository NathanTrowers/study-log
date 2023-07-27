import LogCard from './LogCard';

const LogCardList = ({ logs }) => {
    return (
        <>
            {
                logs.map( (log, index) => {
                    const { 
                        _id, subject, details, ratedUnderstanding,
                        date, startTime, endTime, duration
                    } = log;

                    return (
                        <LogCard
                            key={index}
                            _id={_id}
                            subject={subject}
                            ratedUnderstanding={ratedUnderstanding}
                            date={date}
                            startTime={startTime}
                            endTime={endTime}
                            duration={duration}
                            details={details}
                        />
                    )
                })
            }
        </>
    )
}

export default LogCardList;
