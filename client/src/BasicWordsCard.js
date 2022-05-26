import React from 'react'
import './SignCard.css'

function BasicWordsCard({sign}){
    
    const newSigns = sign.filter(sign => sign.basic_word === true)
    console.log(newSigns)
    return(
        <div className="wrapper">
            {newSigns.map(sign =>
                    <div className="cards">
                            {sign.basic_word === true ? <p className="letter" >{sign.word}</p>: null}
                            {sign.basic_word === true ? <img className="img" id="inCard" src={sign.photo}/> : null}
                            {sign.basic_word === true ? <p className="desc" id="inCard">{sign.description}</p>: null}
                        </div>
                        
            )},
    </div>
    )
}



export default BasicWordsCard;