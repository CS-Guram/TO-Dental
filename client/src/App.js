import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import About from './pages/about';
import Equipments from './pages/equipments';
import NewPatients from './pages/newPatients';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
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
	<Route path='/equipments' element={<Equipments/>} />
	<Route path='/newPatients' element={<NewPatients/>} />
	<Route path='/sign-up' element={<SignUp/>} />
	<Route path='/login' element={<Login/>} />
	<Route path='/dashboard' element={<Dashboard/>} />
	</Routes>
	<Footer/>
  </Router>

</>
  
  );
}

export default App;