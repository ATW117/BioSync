import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QRScanner from './qrcode';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure Router is only imported here

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router> {/* Only wrap Router here */}
      <App />
      <QRScanner/ >
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
