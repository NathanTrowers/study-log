import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Register from "../../../Components/Authentication/Register";

describe('Test suite for Register Component', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                    <Register />
            </BrowserRouter>
        );
    });
});
