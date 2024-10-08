import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {state.user = action.payload},
    }
});

export const { setUser } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
