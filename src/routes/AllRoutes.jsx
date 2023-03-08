import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hello" element={<div><h1>Hello World</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
