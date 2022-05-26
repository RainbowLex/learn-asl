import React from 'react';
import Home from './Home';
import Alphabet from './Alphabet';
import BasicWords from './BasicWords';
import Sentences from './Sentences';
import {Routes, Route } from 'react-router-dom';
import './App.css';


function App() {

  return(     
        <Routes>
          <Route path= "/"  element = {<Home/>} />
          <Route path= "/home"  element = {<Home/>} />
          <Route path= "/alphabet" element = {<Alphabet/>} />
          <Route path= "/basicWords" element = {<BasicWords/>} />
          <Route path= "/sentences" element = {<Sentences/>} />
        </Routes>
  );
}

export default App;