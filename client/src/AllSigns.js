import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import SignCard from './SignCard'
// import './Home.css';

function AllSigns({user, sign}){

    
    return(
        <div id="home" >
            <Header id='header'/>
            <SignCard sign={sign}  user={user} />
            <Footer id='footer'/>
        </div> 
    )
}

export default AllSigns;