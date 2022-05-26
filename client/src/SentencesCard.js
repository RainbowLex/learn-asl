import React from 'react'
import './SignCard.css'

function SentencesCard({sign}){
    
    const newSigns = sign.filter(sign => sign.sentence === true)
    console.log(newSigns)
    return(
        <div className="wrapper">
            {newSigns.map(sign =>
                    <div className="cards">
                            {sign.sentence === true ? <p className="letter" >{sign.word}</p>: null}
                            {sign.sentence === true ? <img className="img" id="inCard" src={sign.photo}/> : null}
                            {sign.sentence === true ? <p className="desc" id="inCard">{sign.description}</p>: null}
                        </div>
                        
            )},
    </div>
    )
}



export default SentencesCard;