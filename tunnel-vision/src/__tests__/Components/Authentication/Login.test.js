import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from '../../../Components/Authentication/Login';
import { store } from '../../../Store/Store';


describe('Test suite for Login Component', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </BrowserRouter>
        );
    });
});
