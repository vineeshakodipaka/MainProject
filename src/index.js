import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the BrowserRouter

import App from './App';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

document.addEventListener('DOMContentLoaded', function () {
  const root = createRoot(document.getElementById('root'));
  root.render(
    <Router>
      <App />
    </Router>
  );
});
