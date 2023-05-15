// importing the React library for creating React components
import React from 'react';

// import the necessary functions from the ReactDOM library.
import ReactDOM from 'react-dom/client';

// import the main App component.
import App from './App';

// using the createRoot method to create a new root for the React app and render the App component inside it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Use the <React.StrictMode> component to enable additional runtime checks and warnings in the app.
  <React.StrictMode>

    {/* Render the App component. */}
    <App />
  </React.StrictMode>
);



