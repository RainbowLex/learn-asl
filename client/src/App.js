import AllSigns from './AllSigns';
import Alphabet from './Alphabet';
import BasicWords from './BasicWords';
import Sentences from './Sentences';
import SignUpForm from './SignUpForm';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [sign, setSign] = useState([])
  const [faveSign, setFaveSign] = useState([])
  const [deletes, setDeletes] = useState(false)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
    fetch('/signs')
        .then((resp) => resp.json())
        .then((data) =>   setSign(data))
        
  }, []);

  console.log(user)

    // useEffect(()=> {
    //     fetch('http://localhost:3000/signs', {
        
    // })
    //     .then((resp) => resp.json())
    //     .then((data) => setSign(data))
    // },[]) 
  if (!user) return <Login onLogin={setUser} />;

    function sortThings(){
      setSign([])
      const arr =   user?.favorites.map((favorite)=>
      {
      return favorite.sign 
      })
      setSign(arr)
    }

    function deletingFave(){
     
    }

  return (
    <>
      <NavBar user={user} setUser={setUser} setSign={setSign} sortThings={sortThings} faveSign={faveSign} deletes={deletes}/>
      
      <main>
      <Routes user={user} setUser={setUser}>
           <Route path= "/"  element = {<AllSigns user={user} sign={sign} faveSign={faveSign} deletes={deletes}/>}/>
           <Route path= "/allSigns"  element = {<AllSigns user={user} sign={sign} faveSign={faveSign} deletes={deletes}/>} />
           <Route path= "/alphabet" element = {<Alphabet/>} />
           <Route path= "/basicWords" element = {<BasicWords/>} />
           <Route path= "/sentences" element = {<Sentences/>} />
      </Routes>
      </main>
    </>
  );
}

export default App;
