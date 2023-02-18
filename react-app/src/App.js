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
    <Footer />
  </Router>

  
);
}

export default App;