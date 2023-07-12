import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get } from '../../Utils/Request';

export const fetchLogsForCurrentUser = createAsyncThunk('logs/fetchLogsForCurrentUser', async user => {
    const logs = (await get(`/logs?id=${user.id}`)).data.logs.response;

    return logs;
});

export const logsSlice = createSlice({
    name: 'logs',
    initialState: {
        loading: false,
        logs: [],
        error: ''
    },
    reducers: {
        setLogs: (state, action) => {state.logs = action.payload},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogsForCurrentUser.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchLogsForCurrentUser.fulfilled, (state, action) => {
            state.loading = false;
            state.logs = action.payload;
            state.error = ''
        });
        builder.addCase(fetchLogsForCurrentUser.rejected, (state, action) => {
            state.loading = false;
            state.logs = [];
            state.error = action.error.message;
        });
    }
});

export const { setLogs } = logsSlice.actions;

export const selectLogs = state => state.logs;

export default logsSlice.reducer;
