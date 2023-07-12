import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import LogCard from "../../../Components/Log/LogCard";
import MockLogData from './_data/MockLogData';

describe('Test fro the LogCard Component', () => {
    it('renders without crashing', () => {
        /** Arrange  */
        const { 
            subject, details, ratedUnderstanding,
            date, startTime, endTime, duration
        } = MockLogData[0];
        
        /** Act */
        render(
            <BrowserRouter>
                <LogCard 
                    subject={subject}
                    ratedUnderstanding={ratedUnderstanding}
                    date={date}
                    startTime={startTime}
                    endTime={endTime}
                    duration={duration}
                    details={details}
                />
            </BrowserRouter>
        );

        /** Assert */
        expect(screen.getByText(`Subject: ${subject}`));
        expect(screen.getByText(`Rated Understanding: ${ratedUnderstanding}`));
        expect(screen.getByText(`Date: ${date}`));
        expect(screen.getByText(`Start Time: ${startTime}`));
        expect(screen.getByText(`End Time: ${endTime}`));
        expect(screen.getByText(`Duration: ${duration}`));
        expect(screen.getByText(`Details: ${details}`));
    });
});
