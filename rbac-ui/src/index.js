import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <NavBar />
    <App />
  </Router>
);
