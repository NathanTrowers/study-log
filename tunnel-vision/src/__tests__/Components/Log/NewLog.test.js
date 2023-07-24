import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MockLogData from '../../../__testMocks__/Log/MockLogData';
import * as UserSlice from '../../../Components/Slice/UserSlice';
import * as LogsSlice from '../../../Components/Slice/LogsSlice';
import * as TimeSlice from '../../../Components/Slice/TimeSlice';
import NewLog from "../../../Components/Log/NewLog";

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
    useSelector: jest.fn(() => [])
}));
import * as reactRedux from 'react-redux';

describe('Test suite for the NewLog component', () => {
    it('renders without crashing', () => {
        /** Arrange */
        reactRedux.useDispatch.mockImplementation(() => jest.fn());
        reactRedux.useSelector.mockImplementationOnce(() => {return {user: {id: 'MOCK UUID'}}});
        reactRedux.useSelector.mockImplementationOnce(() => {
            return { time: { 
                duration: '02:00:00:000',
                startTime: '13:30:00:000',
                endTime: '15:30:00:000'
           }}
        });

        jest.spyOn(UserSlice, 'selectUser')
            .mockImplementation(() => {return {user: {id: 'MOCK UUID'}}});
        jest.spyOn(LogsSlice, 'fetchLogsForCurrentUser')
            .mockImplementation(() => MockLogData);
        jest.spyOn(TimeSlice, 'selectTime')
            .mockImplementation(() => {return { time: { 
                duration: '02:00:00:000',
                startTime: '13:30:00:000',
                endTime: '15:30:00:000'
               }}});

        /** Act */ 
        render(
            <BrowserRouter>
                    <NewLog />
            </BrowserRouter>
        );

        /** Assert */
        expect(screen.getByPlaceholderText('Subject Name'));
        expect(screen.getByPlaceholderText('Put details about your study session here!'));
        expect(screen.getByPlaceholderText('5'));
        expect(screen.getByTestId('duration'));
        expect(screen.getByTestId('startTime'));
        expect(screen.getByTestId('endTime'));
        expect(screen.queryByText('Create New Log'));
    });
});
