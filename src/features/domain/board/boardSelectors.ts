import type { RootState } from '../../../store/index';
import { createSelector } from '@reduxjs/toolkit'

export const selectBoards = (state: RootState) => state.boards.boards;
export const selectLoading = (state: RootState) => state.boards.loading;

export const selectBoardById = (id: number) => createSelector(selectBoards, (boards) => boards.find((board) => board.id === id));