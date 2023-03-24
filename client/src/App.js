import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import About from './pages/about';
// import Services from './components/equipment';
// import NewPatients from './components/newPatients';
// import Login from './components/login';
import Footer from './components/footer/footer';

import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';

function App() {
  return (
<>

  <Router>
	<Navbar />
  <Routes>
		<Route exact path='/'  element={<Home />} />
	  <Route path='/home'  element={<Home />} />
    <Route path='/about' element={<About/>} />
		{/* <Route path='/Services' element={<Services/>} />
		<Route path='/NewPatients' element={<NewPatients/>} />
		<Route path='/Login' element={<Login/>} /> */}
	</Routes>
	<Footer/>
  </Router>

</>
  
  );
}

export default App;