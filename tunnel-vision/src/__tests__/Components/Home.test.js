import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import Home from '../../Components/Home';

describe('Test suite for Home Component', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByRole('heading')).toHaveTextContent('Welcome Home!'); //TODO: Finish this with the right role;s
        expect(screen.getByRole('button')).toHaveTextContent('Logout');
    });
});
