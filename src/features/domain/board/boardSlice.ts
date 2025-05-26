import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Board } from './boardType';
import { fetchBoard } from './boardThunk'

interface BoardState {
    boards: Board[];
    loading: boolean;
    error: string | null;
}

const initialState: BoardState = {
    boards: [],
    loading: false,
    error: null
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBoard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBoard.fulfilled, (state, action: PayloadAction<Board[]>) => {
                state.loading = false;
                state.boards = action.payload;
            })
            .addCase(fetchBoard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? '에러 발생'
            });
    }
});

export default boardSlice.reducer;