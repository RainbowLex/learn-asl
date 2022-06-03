import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "./styles";
import { useNavigate } from "react-router-dom";

function Login({ onLogin, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  function takeToAll(){
    window.location.replace("/AllSigns")
    
}

  return (
    <Wrapper>
      <Logo>Handiction</Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <ButtonFave color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </ButtonFave>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <ButtonFave color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </ButtonFave>
          </p>
        </>
      )}
      <Divider />
    </Wrapper>
  );
}

const ButtonFave = styled.button`
background-color: transparent;
color: white;
background-color: red;
padding: 8px 16px;
cursor: pointer;
font-size: 15px;
border-radius: 6px;
border: 1px solid red;

&:hover {
    background-color: rgba(245, 39, 39, 1);
  }
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: red;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;