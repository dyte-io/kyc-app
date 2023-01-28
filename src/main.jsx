import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1>Digi Bank KYC</h1>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </>,
);
