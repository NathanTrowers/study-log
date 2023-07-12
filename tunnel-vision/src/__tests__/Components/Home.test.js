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

        expect(screen.getByRole('heading')).toHaveTextContent('Welcome Home!');
        expect(screen.queryByText('Logout'));
        expect(screen.queryByText('Logs'));
    });
});
