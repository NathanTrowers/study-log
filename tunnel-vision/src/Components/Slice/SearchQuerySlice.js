import { createSlice } from '@reduxjs/toolkit';

export const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: '',
    reducers: {
        setSearchQuery: (state, action) => {return state = action.payload},
    }
});

export const { setSearchQuery } = searchQuerySlice.actions;

export const selectSearchQuery = state => state.searchQuery;

export default searchQuerySlice.reducer;
