import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BoardList from './features/domain/board/component/BoardList'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <BoardList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
