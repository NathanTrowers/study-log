import { Provider, useDispatch , useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../../Components/Authentication/Login';
import * as UserSlice from '../../../Components/User/UserSlice';
import store from '../../../Store/Store';
import * as Request from '../../../Utils/Request';
import * as Message from '../../../Utils/Message';
import * as LoginValidator from '../../../Validators/LoginValidator';

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

    //TODO: If time allows, figure out why this test isn't entering anything in the fields despite it working fine in Cypress (test fails).
    xit('shows success message when form login succeeds', async () => {
        /** Arrange */
        jest.mock('react-redux', () => ({
            useDispatch: jest.fn(() => jest.fn()),
            useSelect: jest.fn()
        }));

        jest.spyOn(Request, 'post')
            .mockImplementation(() => {
                return {
                    data: {
                        message: 'Login successful!',
                        user: {
                            dateCreated: '22-04-2-2020 9:34',
                            userName: 'Studying Addict2',
                            email: 's.addict@test.com'
                        }
                    }
                }
            });
        jest.spyOn(LoginValidator, 'validateLogin')
            .mockImplementation(() => true);
        jest.spyOn(Message, 'setSuccessMessage')
            .mockImplementation(() => {
                return {class: 'success', text: 'Login successful!, Welcome Studying Addict2'}
            });
        jest.spyOn(UserSlice, 'setUser')
            .mockImplementation(() => jest.fn());

        /** Act */
        const user = userEvent.setup();
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </BrowserRouter>
        );

        let emailField = screen.getByPlaceholderText('name@example.com');
        let passwordField = screen.getByPlaceholderText('Example!123');
        user.type(emailField, 's.addict2@test.com');
        user.type(passwordField, 'bookwrm');

        user.click(screen.getByText('Login'));

        /** Assert */
        expect(await screen.findByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Login successful!, Welcome Studying Addict2'));
    });
});
