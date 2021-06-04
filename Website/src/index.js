import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font/stylesheet.css';
import App from './components/App';
import {StyleRoot} from 'radium'

// Use StyleRoot to enable keyframes and media queries for Javascript type
// styles with Radium in components. 
// Single render function for the entire application. 
ReactDOM.render(<StyleRoot><App /></StyleRoot>, document.getElementById('root'));