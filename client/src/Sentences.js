import React, {useEffect ,useState} from 'react';
import Header from './Header';
// import Footer from './Footer';
import SentencesCard from './SentencesCard'
// import './Home.css';

function Sentences(){
    const [sign, setSign] = useState([])
  

    useEffect(()=> {
        fetch('http://localhost:3000/signs', {
        
    })
        .then((resp) => resp.json())
        .then((data) => setSign(data))
    },[]) 
    
    return(
        <div id="home" >
            <Header id='header'/>
            <SentencesCard sign={sign} setSign ={setSign}/>
            {/* <Footer id='footer'/> */}
        </div> 
    )
}

export default Sentences;