import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import Welcome from '../../Components/Welcome';

describe('Test suite for Welcome Component', () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        );
    });

    it('has a clickable link', () => {
        /** Act */
        render(
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        );

        /** Assert */
        expect(screen.getByRole('button')).toHaveTextContent('Login');
        expect(screen.getByRole('button')).not.toBeDisabled();
    })
});
