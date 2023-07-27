import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import LogCard from "../../../Components/Log/LogCard";
import * as LogsSlice from '../../../Components/Slice/LogsSlice';
import MockLogData from '../../../__testMocks__/Log/MockLogData';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
}));
import * as reactRedux from 'react-redux';

describe('Test fro the LogCard Component', () => {
    it('renders without crashing', () => {
        /** Arrange  */
        const { 
            subject, details, ratedUnderstanding,
            date, startTime, endTime, duration
        } = MockLogData[0];
        const _id = 'fe30bb44-6a64-409e-9258-2d995e7b4783';

        jest.spyOn(LogsSlice, 'setSingleLogId')
        .mockImplementation(() => _id);

        /** Act */
        render(
            <BrowserRouter>
                <LogCard
                    _id={_id}
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
        expect(screen.getByText('Update Log'));
    });
});
