import React from 'react'
import './SignCard.css'
import { Button } from "./styles";

function SentencesCard({sign, user}){

    // function isWork(signid){
        

    //     if(user){
    //         fetch("/favorites",{
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({sign_id: signid, user_id: user.id})
    //         })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //     }
    // }

    // console.log(sign)

    const newSigns = sign.filter(sign => sign.sentence === true)
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
                                            {sign.sentence === true ? <p className="letter" >{sign.word}</p>: null}
                                            {sign.sentence === true ? <img className="img"  src={sign.photo}/> : null}
                                            <p className="firstClick">Click For a Detailed Description</p>
                                        </div>
                                    </div>
                                <div className="back">
                                    <div id="inCard">
                                        {sign.sentence === true ? <p className="desc">{sign.description}</p>: null}
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



export default SentencesCard;