import React from "react";
import { useState } from "react";

export default function DisableButton() {
    const [inputText, setInputText] = useState("");
    const updateInputState = (ev) => {
        setInputText(ev.target.value);
    };

    return (
        <>
            <div className="exercise">
                <h2>Disable button</h2>
                <input onChange={updateInputState} type="text" />
                <button disabled={!inputText}>Submit</button>
            </div>
        </>
    );
}
