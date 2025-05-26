import { get } from '../../../lib/apiClient';  // 상대 경로 기준 조정
import type { Board } from './boardType';

export const fetchBoardsAPI = async (): Promise<Board[]> => {
  return await get<Board[]>('/boards');
};
