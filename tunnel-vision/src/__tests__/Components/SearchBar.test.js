import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import SearchBar from '../../Components/SearchBar';
import store from '../../Store/Store';

describe('test case for the SearchBar component', () => {
    it('renders without crashing', () => {     
        /** Act */
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );

        /** Assert */
        expect(screen.getByPlaceholderText('Subject Name'));
    });
});
