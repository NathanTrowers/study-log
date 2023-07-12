import LogCard from './LogCard';

const LogCardList = ({ logs }) => {
    return (
        <>
            {
                logs.map( (log, index) => {
                    const { 
                        subject, details, ratedUnderstanding,
                        date, startTime, endTime, duration
                    } = log;

                    return (
                        <LogCard
                            key={index}
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
