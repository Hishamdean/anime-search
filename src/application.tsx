import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Synopsis from './pages/synopsis';

const Application: React.FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='synopsis/'>
          <Route index element={<Synopsis />} />
          <Route path=":animeId" element={<Synopsis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Application;