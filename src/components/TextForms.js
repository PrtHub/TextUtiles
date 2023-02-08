import React, { useState } from 'react'

function TextForms(props) {
    const [text, setText] = useState("")


    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleClickClear = () => {
        setText("");
    }

    const handleRemove = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }



    return (
        <>
            <div className="container mb-2" style={{color: props.mode==='light'? 'black' : 'white'}}   >
                <h1>{props.heading}</h1>
                <textarea className={`form-control text-${props.color}`} style={{backgroundColor: props.mode==='light'? 'white' : '#30303c'}} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
                <button type="button" className={`btn btn-${props.color} my-3 mx-1`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className={`btn btn-${props.color} my-3 mx-1`} onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="button" className={`btn btn-${props.color} my-3 mx-1`} onClick={handleRemove}>Remove Extra Spaces</button>
                <button type="button" className={`btn btn-${props.color} my-3 mx-1`} onClick={handleClickClear}>Clear</button>

            </div>
            <div className="container" style={{color: props.mode==='light'? 'black' : 'white'}} >
                <h2>Your Word Summary</h2>
                <p>{text.split(/\s+/).filter((ele) => ele.length!==0).length} words and {text.length} charecters</p>
                <p>{0.08 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p className={`text-${props.color}`}>{text}</p>
            </div>
        </>
    )
}

export default TextForms;
