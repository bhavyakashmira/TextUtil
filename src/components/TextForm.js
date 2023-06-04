import React ,{useState}from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowClick=()=>{
      let newText = text.toLowerCase();
      setText(newText);
  }
  const clear=()=>{
    let newText = "";
    setText(newText);
}

const handleOnChange=(event)=>{
        console.log("upper case");
        setText(event.target.value);
  
  }

const handlecopy=()=>{
  var text =document.getElementById("emybox");
  text.select();
  navigator.clipboard.writeText(text.value);
}

    const[text,setText]=useState("");


  return (
    
<div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea class="form-control"value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="emybox" rows="8"></textarea>
</div>
<button className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert upper-case</button>
<button className="btn btn-dark mx-1 my-1" onClick={handlelowClick}>Convert lower-case</button>
<button className="btn btn-danger mx-1 my-1" onClick={clear}>Clear text</button>
<button className="btn btn-danger mx-1  my-1" onClick={handlecopy}>Copy text</button>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
  </div>
    </div>

  )
}
