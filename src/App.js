// import { useState } from 'react';
import './App.css';
import About from './componants/About';
// import Navbar from './componants/Navbar';
import TextForm from './componants/textform';
import Navbar from './componants/Navbar';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');// dark mode is on or not show
  const toggleMode= ()=>{
      if (mode === 'light') {
        setMode('dark');
      }
      else{
        setMode('light');  
      }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" AboutTxt="About Us"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
        <About/>  
      </div>
    </>
  );
}

export default App;   
