import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Components/User/UserSlice';

export default configureStore({
    reducer: {
        user: userReducer
    }
});
