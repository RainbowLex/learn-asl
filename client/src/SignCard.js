import React, {useEffect ,useState} from 'react'
import './SignCard.css'
import { Button } from "./styles";
import styled from "styled-components";

function SignCard({sign, user}){

console.log(sign)


    function isAdd(signid){
        

        if(user){
            fetch("/favorites",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({sign_id: signid, user_id: user.id})
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }

    function isDelete(){
        
    }


    console.log(sign)
    return(
        <div className="wrapper">
            {sign?.map(sign =>
            (
                <div  className="cards">
                <label className="container">
                    <input className="inp"type="checkbox"/>
                        <div className="flip-card">
                            <div className="front">
                                <div id="inCard">
                                    <p className="letter" >{sign.word}</p>
                                    <img className="img"  src={sign.photo}/>
                                    <p className="firstClick">Click For a Detailed Description</p>
                                </div>
                            </div>
                        <div className="back">
                            <div id="inCard">
                                <p className="desc" >{sign.description}</p>
                                <ButtonFave onClick= {()=>isAdd(sign.id)}>Add To Favorites</ButtonFave>
                                <p className="click">Click to View Example</p>
                            </div>
                        </div>
                    </div>
                </label>
                </div>
            )
            )},
    </div>
    )
}


const ButtonFave = styled.button`
background-color: transparent;
color: white;
background-color: black;
padding: 8px 16px;
cursor: pointer;
font-size: 20px;
border-radius: 6px;

&:hover {
    background-color: rgba(31, 31, 31, 1);
  }
`;

export default SignCard;