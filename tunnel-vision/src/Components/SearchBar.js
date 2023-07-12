import { useDispatch } from 'react-redux';
import { setSearchQuery } from './Slice/SearchQuerySlice';
import './_styles/SearchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch();

    const onSearchChange = ({ target }) => {
        dispatch(setSearchQuery(target.value))
    }

    return (
        <div>
            <input
                data-test='search-bar-input'
                id='searchBar'
                type="search"
                name="searchQuery" 
                placeholder="Subject Name"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBar;
