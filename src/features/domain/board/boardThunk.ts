import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBoardsAPI } from './boardAPI'
import type { Board } from './boardType';

export const fetchBoard = createAsyncThunk<Board[]>(
    'board/fetchBoard',
    async () => {
        return await fetchBoardsAPI();
    }
)