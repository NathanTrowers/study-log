import { render } from '@testing-library/react'
import InfoIcon from "../../Components/InfoIcon";

describe('Test Suite for the InfoIcon component', () => {
    it('renders without crashing', () => {
       render(
            <InfoIcon
                infoBubbleText='Here is some info'
            />
        );
    });
});
