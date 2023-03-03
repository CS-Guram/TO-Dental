import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blogs';
import NewPatients from './pages/newPatients';
import Footer from './components/Footer/Footer';

function App() {
return (
  <Router>
	  <Navbar />

    <Routes>
		  <Route exact path='/'  element={<Home />} />
	    <Route path='/home'  element={<Home />} />
		  <Route path='/about' element={<About/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/newPatients' element={<NewPatients/>} />
	  </Routes>

    <div className = "page-container">
    <div className = "content-wrap"></div>

    <Footer />
    </div>
  </Router>
  
);
}

export default App;