import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here')
    // setText("new text");
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
                        Enter the text to analye below
                    </label>
                    <textarea
                        className="form-control"
                        value={text} onChange={handleOnChange}
                        id="myBox"
                        rows="8">
                    </textarea>
                </div>
            </form>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
        </div>
    )
}
