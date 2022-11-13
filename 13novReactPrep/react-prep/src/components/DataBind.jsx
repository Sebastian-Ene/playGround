import React from "react";
import "./Databind.css";
import { useState } from "react";

export default function DataBind() {
    const [displayText, setDisplayText] = useState("");

    const inputOnchange = (e) => {
        setDisplayText((prevText) => {
            return e.target.value;
        });
    };

    return (
        <>
            <div className="exercise">
                <h2>Data Binding</h2>
                <input
                    onChange={inputOnchange}
                    type="text"
                    placeholder="Enter Text"
                />
                <p>{displayText}</p>
            </div>
        </>
    );
}
