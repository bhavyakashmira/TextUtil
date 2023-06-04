import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Welcome from './components/Welcome';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode]= useState('light');
  const[alert, setalert]= useState(null);

  const showalert=(message,type)=>{
       setalert({
        msg:message,
        type:type
       })
  }
  const toggle=()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='grey'
        showalert("Dark mode has been activated","success");
        document.title="TextUtil-DarkMode"
    
      }else{
        setmode('light');
        document.body.style.backgroundColor='white'
        showalert("Light mode has been activated","success");
        document.title="TextUtil-LightMode"
      }

  }

  return (
    <>
    <Router>
<Navbar title="Navbar" mode={mode} toggleMode={toggle}></Navbar>
<Alert alert={alert}/>
<div className= "container my-3"> 
<Routes>
<Route exact path="/welcome" element={<Welcome/>} />
<Route exact path="/" element={ <TextForm heading="Enter your text here" mode={mode}/>} />
<Route exact path="/About" element={<About/>} />
</Routes>
</div> 
</Router>
</>
  );
}

export default App;
