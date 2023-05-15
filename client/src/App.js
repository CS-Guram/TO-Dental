// importing the React library for creating React components
import React from 'react';

// importing the App.css file for styling.
import './App.css';

// importing the Bootstrap CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css";
// importing the components for the app.
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

// importing the pages for the app.
import Home from './pages/home';
import About from './pages/about';
import Equipments from './pages/equipments';
import NewPatients from './pages/newPatients';
import Login from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';


// importing the necessary components from the React Router DOM library
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';

// defining the App component
function App() {
  return (
<>
  {/* using the <Router> component to enable routing in the app. */}
  <Router>
	{/* rendering the <Navbar> component. */}
	<Navbar />
	{/* using the <Routes> component to define the app's routes. */}
  <Routes>
	{/* defining the home page route. */}
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

// exporting the App component.
export default App;