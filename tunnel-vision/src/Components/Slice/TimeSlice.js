import { createSlice } from '@reduxjs/toolkit';

export const timeSlice = createSlice({
    name: 'time',
    initialState: {},
    reducers: {
        setTime: (state, action) => {state.time = action.payload},
    }
});

export const { setTime } = timeSlice.actions;

export const selectTime = state => state.time;

export default timeSlice.reducer;
