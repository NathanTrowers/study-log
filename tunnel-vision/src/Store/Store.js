import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Components/Slice/UserSlice';
import logsReducer from '../Components/Slice/LogsSlice';
import searchQueryReducer from '../Components/Slice/SearchQuerySlice';

const store = configureStore({
    reducer: {
        user:           userReducer,
        logs:           logsReducer,
        searchQuery:    searchQueryReducer
    }
});

export default store;
