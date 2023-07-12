import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import LogCardList from "../../../Components/Log/LogCardList";
import MockLogData from './_data/MockLogData';

describe('Test fro the LogCardList Component', () => {
    it('renders itself and child components without crashing', () => {
        /** Act */
        render(
            <BrowserRouter>
                <LogCardList 
                    logs={MockLogData}
                />
            </BrowserRouter>
        );

        /** Assert */
        expect(screen.getByText('Subject: MERN Stack Web Dev'));
        expect(screen.getByText('Subject: Android App Dev'));
    });
});
