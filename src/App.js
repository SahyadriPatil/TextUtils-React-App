//import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
//  import About from './components/About';
//  import Alert from './components/Alert';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
//  import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";

function App() { 
  const [mode,setMode] =useState('dark')
  // const [alert,setAlert]=useState(null)

  // const showAlert =(msg,type)=>
  // {
  //   setAlert({
  //     msg : msg,
  //     type:type
  //   })
  // }

  const toggle =()=>{
    if(mode=== 'dark')
    {
      setMode('light')
      // document.title = "Textutils - light mode"
      // showAlert("light mode has been enabled","success")
    }
    else
    {
      setMode("dark")
      // showAlert("Dark mode has been enabled","danger")
    }
  }
  
  return (
    <>
   {/* <Router> */}

<Navbar title="textutils" mode={mode} toggle={toggle}/>
{/* <Alert alert={alert}/> */}
<div className='container'>
{/* <Switch>
          <Route exact path="/about">
          <About/>
          </Route>
          <Route exact path="/home">
          <TextForm heading = " Write here to analyze "/> 
          </Route>
 </Switch> */}
 <TextForm heading = " Write here to analyze "/> 
 </div>
 {/* </Router> */}
    </>
  );
}

export default App;


