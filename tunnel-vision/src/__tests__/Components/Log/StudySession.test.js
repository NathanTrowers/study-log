import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StudySession from '../../../Components/Log/StudySession';
import { store } from '../../../Store/Store';

describe('Test suite for the StudySession component', () => {
    it('renders without crashing', () => {
        /** Act */
        render(
            <BrowserRouter>
                <Provider store={store}>
                  <StudySession />
                </Provider>
            </BrowserRouter>
        );
        
        /** Assert */
        expect(screen.queryAllByDisplayValue('Stop Studying'))
    });
});
