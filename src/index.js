import React from 'react';
import ReactDOM from 'react-dom';
import  "./CSS/App.css"
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(

  <React.StrictMode>
    <Router>
      <App />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
