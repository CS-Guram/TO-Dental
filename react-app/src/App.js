import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router}
	from 'react-router-dom';

  import Footer from './components/Footer/Footer';

function App() {
return (
  <Router>
	  <Navbar />

    <div className = "page-container">
    <div className = "content-wrap"></div>
    <Footer />
    </div>
  </Router>
  
);
}

export default App;