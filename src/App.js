import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import myWonderfulImage from "./images.jpg";


function App() {
  return (
    <div className="firstone" style={{border:'solid 1px black',maxwidth:'100vw'}}>
      
      <h1 className="title-red">Your name here </h1>  
      <br />
      <img src="/first.jpg" className="firstphoto"></img>
      <br />
      <img src={myWonderfulImage} />
     
    </div>
   
  );

  return(
    
    <video width={320} height={240} controls>  
            <source src="ok.mp4" type="video/mp4" /> 
          </video> 
    
   
      
    
  );
 
}


export default App;
