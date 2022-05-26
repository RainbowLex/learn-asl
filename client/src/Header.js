import React from 'react';
import './Header.css'; 
import logo from "../src/logo/aslLogo.png"

function Header({setPage, page}){
    function takeToAll(){
        window.location.replace("/Home")
    }
    return(
        <div id="Header">
            <a href= "/Home"><img className='logo' src={logo} alt="Logo"></img></a>
            <nav className="navBar">
                <a className ='navLink' href="./Home" >Home</a>

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
                <a className ='navLink' href="./Account">User</a>
            </nav>
            {/* <img className="headerImage" src={logo} alt="Logo" onClick={takeHome}></img>                                                     */}
</div>

)
}
export default Header;