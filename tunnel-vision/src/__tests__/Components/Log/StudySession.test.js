import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudySession from '../../../Components/Log/StudySession';

describe('Test suite for the StudySession component', () => {
    it('renders without crashing', () => {
        /** Act */
        render(
            <BrowserRouter>
                <StudySession />
            </BrowserRouter>
        )
        /** Assert */
        expect(screen.queryAllByDisplayValue('Stop Studying'))
    });
});
