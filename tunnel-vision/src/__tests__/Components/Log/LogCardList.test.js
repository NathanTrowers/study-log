import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import LogCardList from "../../../Components/Log/LogCardList";
import MockLogData from '../../../__testMocks__/Log/MockLogData';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
}));
import * as reactRedux from 'react-redux';

describe('Test fro the LogCardList Component', () => {
    it('renders itself and child components without crashing', () => {
        /** Arrange */
        MockLogData[0]._id = 'fe30bb44-6a64-409e-9258-2d995e7b4783';
        MockLogData[1]._id = 'fe30bb44-6a64-409e-9258-2d995e7b4785';

        /** Act */
        render(
            <BrowserRouter>
                <LogCardList 
                    logs={MockLogData}
                />
            </BrowserRouter>
        );

        /** Assert */
        expect(screen.getByText('Subject: MERN Stack Web Dev'));
        expect(screen.getByText('Subject: Android App Dev'));
    });
});
