import { combineReducers } from 'redux';
import logsReducer from '../Components/Slice/LogsSlice';
import searchQueryReducer from '../Components/Slice/SearchQuerySlice';
import timeReducer from '../Components/Slice/TimeSlice';
import userReducer from '../Components/Slice/UserSlice';

const rootReducer = combineReducers({
    logs:           logsReducer,
    searchQuery:    searchQueryReducer,
    time:           timeReducer,
    user:           userReducer
});

export default rootReducer;
