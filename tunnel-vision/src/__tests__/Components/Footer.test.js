import { render, screen } from '@testing-library/react';
import Footer from '../../Components/Footer';

describe('Test Suite for the Footer component', () => {
    it('renders without crashing', () => {
        /** Arrange */
        const currentYear = new Date().getFullYear();

        /** Act */
        render(
            <Footer />
        );

        /** Assert */
        expect(screen.getByTestId('footer-test-id'));
    });
});
