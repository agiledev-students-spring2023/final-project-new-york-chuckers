import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//created this variable so we can all have the same variable for the backend address access and don't have to change it every time we want to run tests on our code.
//Not sure how realistic of a use this is, we should ask the professor. 
window.backend = "https://chuckers-back-cd.onrender.com";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
