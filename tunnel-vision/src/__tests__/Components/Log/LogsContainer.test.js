import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LogsContainer from '../../../Components/Log/LogsContainer';
import * as LogsSlice from '../../../Components/Slice/LogsSlice';
import * as SearchQuerySlice from '../../../Components/Slice/SearchQuerySlice';
import MockLogData from '../../../__testMocks__/Log/MockLogData';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
    useSelector: jest.fn(() => [])
}));
import * as reactRedux from 'react-redux';

describe('Test suite for the LogContainer component', () => {
    it.each([
        {loadingState: true,  errorMessage: '',         expectedText: 'Loading...'},
        {loadingState: false, errorMessage: '',         expectedText: 'Subject: MERN Stack Web Dev'},
        {loadingState: false, errorMessage: 'ERRAAAA!', expectedText: 'Something went wrong: ERRAAAA!'}
    ])('renders without crashing when the expected text is $expectedText', async ({ loadingState, errorMessage, expectedText }) => {
        /** Arrange */
        reactRedux.useDispatch.mockImplementation(() => jest.fn());
        reactRedux.useSelector.mockImplementationOnce(() => {return {user: {id: 'fe30cd44-6a65-409e-8493-2d936e7b4783'}}});
        reactRedux.useSelector.mockImplementationOnce(() => {
           return { 
            loading: loadingState,
            logs: MockLogData,
            error: errorMessage
           }
        });
        reactRedux.useSelector.mockImplementationOnce(() => '');
        reactRedux.useSelector.mockImplementation(() => {return {user: {id: 'fe30cd44-6a65-409e-8493-2d936e7b4783'}}});

        jest.spyOn(LogsSlice, 'fetchLogsForCurrentUser')
            .mockImplementation(() => MockLogData);
        jest.spyOn(LogsSlice, 'selectLogs')
            .mockImplementation(() => jest.fn());
        jest.spyOn(SearchQuerySlice, 'selectSearchQuery')
            .mockImplementation(() => jest.fn());

        /** Act */
        await render(
            <BrowserRouter>
                <LogsContainer />
            </BrowserRouter>
        );

        /** Assert */
        expect(screen.getByPlaceholderText('Subject Name'));
        expect(screen.getByText(expectedText));
    });
});
