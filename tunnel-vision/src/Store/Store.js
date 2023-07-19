import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Components/Slice/UserSlice';
import logsReducer from '../Components/Slice/LogsSlice';
import searchQueryReducer from '../Components/Slice/SearchQuerySlice';
import timeReducer from '../Components/Slice/TimeSlice';

const store = configureStore({
    reducer: {
        user:           userReducer,
        logs:           logsReducer,
        searchQuery:    searchQueryReducer,
        time:           timeReducer
    }
});

export default store;
