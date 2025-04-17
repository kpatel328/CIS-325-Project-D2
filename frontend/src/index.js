import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importing App component
import './index.css'; // Optional - for styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);