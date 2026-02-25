import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "@fontsource/play"; // Defaults to weight 400
// Optional: import specific weights/styles
import "@fontsource/play/700.css"; // Example for bold (weight 700)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
