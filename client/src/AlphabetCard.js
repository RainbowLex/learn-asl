import React from 'react'
import './SignCard.css'

function AlphabetCard({sign}){
    
    const newSigns = sign.filter(sign => sign.is_alpha === true)
    console.log(newSigns)
    return(
        <div className="wrapper">
            {newSigns.map(sign =>
                    <div className="cards">
                            {sign.is_alpha === true ? <p className="letter" >{sign.word}</p>: null}
                            {sign.is_alpha === true ? <img className="img" id="inCard" src={sign.photo}/> : null}
                            {sign.is_alpha === true ? <p className="desc" id="inCard">{sign.description}</p>: null}
                        </div>
                        
            )},
    </div>
    )
}



export default AlphabetCard;