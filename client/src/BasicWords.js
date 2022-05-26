import React, {useEffect ,useState} from 'react';
import Header from './Header';
// import Footer from './Footer';
import BasicWordsCard from './BasicWordsCard'
// import './Home.css';

function BasicWords(){
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
            <BasicWordsCard sign={sign} setSign ={setSign}/>
            {/* <Footer id='footer'/> */}
        </div> 
    )
}

export default BasicWords;