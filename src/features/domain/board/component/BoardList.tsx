import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoard } from '../boardThunk';
import { selectBoards, selectLoading } from '../boardSelectors';
import type { AppDispatch } from '../../../../store';


const BoardList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const boards = useSelector(selectBoards);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);

  return (
    <>
      {loading && <p>로딩중....</p>}
      <ul>
        {boards.map(board => (
          <><li key={board.id}>{board.title}</li><li key={board.id}>{board.content}</li></>
        ))}
      </ul>
    </>
  )
}

export default BoardList