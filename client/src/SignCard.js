import React from 'react'
import './SignCard.css'

function SignCard({sign}){
    
    const newSigns = sign.filter(sign => sign.is_alpha === true)
    console.log(newSigns)
    return(
        <div className="wrapper">
            {newSigns.map(sign =>
                    <div className="cards">
                            {sign.is_alpha === true ? <img className="word" src={sign.word}/> : null}
                            {sign.is_alpha === true ? <p className="img" id="inCard">{sign.photo} <br></br>{sign.description}</p>: null }
                        </div>
                        
            )},
    </div>
    )
}



export default SignCard;