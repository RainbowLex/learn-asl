import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {

  return(
    <div>
      <Router>
      <Routes>
      <Route path= "/"  element = {<Home/>} />
      <Route path= "/home"  element = {<Home/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;