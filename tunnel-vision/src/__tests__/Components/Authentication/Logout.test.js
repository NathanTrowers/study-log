import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Logout from '../../../Components/Authentication/Logout';
import store from '../../../Store/Store';
import * as Request from '../../../Utils/Request';


describe('Test suite for Logout Component', () => {
    it.each([
        {expectedMessage: 'You are officially out!',                isLoggedIn: false},
        {expectedMessage: 'I messed up, we\'ll need to try again!', isLoggedIn: null},
    ])
    ('renders with "$expectedMessage" as the message when "isLoggedIn" is $isLoggedIn', async ({ expectedMessage, isLoggedIn }) => {
        /** Arrange */
        jest.spyOn(Request, 'post')
        .mockImplementation(() => {
            return {
                data: {
                    message: expectedMessage,
                    isLoggedIn: isLoggedIn
                }
            }
        });

        /** Act */
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Logout />
                </Provider>
            </BrowserRouter>
        );

        /** Assert */
        expect(await screen.findByText(expectedMessage));
    });
});
