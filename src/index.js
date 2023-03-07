import React from 'react';
import ReactDOM from 'react-dom/client';
/* eslint-disable */
import './index.css';
import AllRoutes from './routes/AllRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AllRoutes />
  </React.StrictMode>
);

