import React from 'react';
import './Header.css'; 
import logo from "../src/logo/aslLogo.png"
import { Button } from "./styles";

function Header({setPage, page}){
    function takeToAll(){
        window.location.replace("/AllSigns")
    }
    return(
        <div id="Header">
            <a href= "/AllSigns"><img className='logo' src={logo} alt="Logo"></img></a>
            {/* <nav className="navBar">

            <div className="wrapper1">
                <div className="right-menu">
                    <button className ="menu-button" onClick={takeToAll}>All Signs</button>
                        <div className="drop-down">
                            <a className ='navLink' href="./Alphabet" >Alphabet</a>
                            <a className ='navLink' href="./BasicWords" >Basic Words</a>
                            <a className ='navLink' href="./Sentences" >Sentences</a>
                        </div>
                </div> 
            </div>
        </nav> */}
</div>

)
}
export default Header;