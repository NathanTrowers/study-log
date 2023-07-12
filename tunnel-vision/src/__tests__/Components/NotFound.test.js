import { render, screen } from "@testing-library/react";
import NotFound from "../../Components/NotFound";

describe('Test for the NotFound component', ()  => {
    it('renders without crashing', () => {
        /** Act */
        render(
            <NotFound />
        )
        /** Assert */
        expect(screen.queryByText('You\'re looking for something non-existent!'));
    });
});
