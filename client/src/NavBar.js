import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles";

function NavBar({user, setUser, setSign, faveSign, sortThings}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  function takeToAll(){
    window.location.replace("/AllSigns")
}
    function handleFavorites(){
      sortThings()
    }

  return (
     <div> 
    <Div1 id="Header">
    <nav className="navBar">

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
</nav>
</Div1>

   <Wrapper>
      <Logo>
        <Link to="/AllSigns">Handiction</Link>
      </Logo>
      <Nav>
        <Button onClick={()=>handleFavorites()}>
          Favorites
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  </div>
  );
}

const Div1 = styled.div`
  position: absolute;
  width: 300px;
  margin-left: 240px;
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: red;
  margin-left: 60px;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
