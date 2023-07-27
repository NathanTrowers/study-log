import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MockLogData from '../../../__testMocks__/Log/MockLogData';
import * as UserSlice from '../../../Components/Slice/UserSlice';
import * as LogsSlice from '../../../Components/Slice/LogsSlice';
import UpdateLog from '../../../Components/Log/UpdateLog';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
    useSelector: jest.fn(() => [])
}));
import * as reactRedux from 'react-redux';

describe('Test suite for the UpdateLog component', () => {
    it('renders without crashing', () => {
        /** Arrange */
        MockLogData[0]._id = 'fe30bb44-6a64-409e-9258-2d995e7b4783';
        const userId = 'ee30bb44-6a65-419e-9257-2d995e7b4781';

        reactRedux.useDispatch.mockImplementationOnce(() => {return {user: userId}});
        reactRedux.useSelector.mockImplementationOnce(() => {return {user: userId}});
        reactRedux.useSelector.mockImplementationOnce(() => MockLogData[0]);

        jest.spyOn(UserSlice, 'selectUser')
            .mockImplementation(() => {return {user: userId}});
        jest.spyOn(LogsSlice, 'selectSingleLog')
            .mockImplementation(() => MockLogData[0]);

        /** Act */
        render(
            <BrowserRouter>
                <UpdateLog />
            </BrowserRouter>
        );

        /** Assert */
        expect(screen.getByDisplayValue('MERN Stack Web Dev'));
        expect(screen.getByPlaceholderText('Put details about your study session here!'));
        expect(screen.getByPlaceholderText('5'));
    })
});
