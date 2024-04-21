import React from 'react';  // Import React library for building UI components
import ReactDOM from 'react-dom';  // Import ReactDOM for DOM-specific methods
import App from './components/App';  // Import the main App component

// Render the App component into the DOM element with ID 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

