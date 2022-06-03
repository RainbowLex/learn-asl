import React from 'react'
import './SignCard.css'
import { Button } from "./styles";

function BasicWordsCard({sign}){
    
    const newSigns = sign.filter(sign => sign.basic_word === true)
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
                                        {sign.basic_word === true ? <p className="letter" >{sign.word}</p>: null}
                                        {sign.basic_word === true ? <img className="img"  src={sign.photo}/> : null}
                                        <p className="firstClick">Click For a Detailed Description</p>
                                    </div>
                                </div>
                            <div className="back">
                                <div id="inCard">
                                    {sign.basic_word === true ? <p className="desc">{sign.description}</p>: null}
                                    <Button>Add To Favorites</Button>
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



export default BasicWordsCard;