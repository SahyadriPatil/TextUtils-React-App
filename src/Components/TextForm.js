//import React from 'react'
import React,{useState} from 'react'


export default function TextForm(props) {
  const  handleUpClick=()=>{
    console.log("Clicked");
    let n = text.toUpperCase();
    setText(n)
  }
  const handleLoClick=()=>{
    let a = text.toLowerCase();
    setText(a);
  }

  const handleClick=()=>{
    let c = " "
    setText(c);
  }
  const handleOnChange=(event)=>{
    console.log("handled")
    setText(event.target.value)
  }


    const[text,setText] = useState("Enter text here")
    //setText = ("hiii")
  return (
    <>
<div>
  <div className="mb-3">
    <h1>{props.heading} - {text}</h1>
    <textarea className="form-control"  value = {text} onChange ={handleOnChange}id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>To UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>To LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClick}>Clear</button>
  </div>
  <div className="container">
    <h1>Your Text Summary</h1>
    <p>Your text contain {text.split(" ").length} and {text.length} characters</p>
  </div>
  </>
  )
  
}
//TextForm.propsTypes = { heading : PropTypes.string}
