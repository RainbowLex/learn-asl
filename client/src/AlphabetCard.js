import React from 'react'
import './SignCard.css'
import { Button } from "./styles";
import styled from "styled-components";

function AlphabetCard({sign}){
    
    const newSigns = sign.filter(sign => sign.is_alpha === true)
    console.log(newSigns)
    return(
        <div className="wrapper">
        {newSigns.map(sign =>
                <div className="cards">
                    <label className="container">
                        <input className="inp" type="checkbox"/>
                            <div className="flip-card">
                                <div className="front">
                                    <div id="inCard">
                                        {sign.is_alpha === true ? <p className="letter" >{sign.word}</p>: null}
                                        {sign.is_alpha === true ? <img className="img"  src={sign.photo}/> : null}
                                        <p className="firstClick">Click For a Detailed Description</p>
                                    </div>
                                </div>
                            <div className="back">
                                <div id="inCard">
                                    {sign.is_alpha === true ? <p className="desc">{sign.description}</p>: null}
                                    <ButtonFave>Add To Favorites</ButtonFave>
                                    <p className="click">Click to View Example</p>
                                </div>
                            </div>
                        </div>
                    </label>
                </div> 
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

export default AlphabetCard;