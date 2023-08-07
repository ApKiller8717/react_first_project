import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    } 
    const handleLoClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    } 
    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value)
    } 

    const handleClearText = ()=>
    {
        let newText = '';
        setText(newText)
    }

    const handleExtraSpace = ()=> {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    } 

    const handleCopy = ()=> {
        var text = document.getElementById("MyBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    } 
    const [text, setText] = useState('Enter text here');
    // text="new text" // wrong way to change
    //setText=("new text")// Correct way  to change
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
                <div className="mb-3">
            <textarea className="form-control" value={text} id="MyBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h1>Your text summery</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
