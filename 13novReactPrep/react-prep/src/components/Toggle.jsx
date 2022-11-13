import React from "react";
import { useState } from "react";

export default function Toggle() {
    const [divVisibility, setDivVisibility] = useState(true);
    const btnOnclick = () => {
        setDivVisibility(!divVisibility);
    };

    return (
        <>
            <div className="exercise">
                <h2>Toggle Exercise</h2>
                <button onClick={btnOnclick}>
                    {divVisibility ? "Hide" : "Show"} Element Below
                </button>

                {divVisibility && (
                    <div className={divVisibility ? "show" : "hide"}>
                        Toggle Challenge
                    </div>
                )}
            </div>
        </>
    );
}
