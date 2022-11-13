import React, { useEffect } from "react";
import { useRef } from "react";
import "./Add2Numbers.css";

export default function Add2Nums() {
    // const [number1, setNumber1] = React.useState();
    // const [number2, setNumber2] = React.useState();
    const [total, setTotal] = React.useState();
    const num1 = useRef(0);
    const num2 = useRef(0);
    const addNumsUpState = () => {
        setTotal(() => {
            return (
                (parseInt(num1.current.value) || 0) +
                (parseInt(num2.current.value) || 0)
            );
        });
    };
    return (
        <div className="exercise">
            <h2>Add 2 Numbers</h2>
            <div>
                <h2>Adding Two Numbers</h2>
                <input ref={num1} placeholder="First Number" type="number" />
                <input ref={num2} placeholder="Second Number" type="number" />

                <button onClick={addNumsUpState}>Add Two Numbers</button>
                <p>Total:{total !== undefined ? total : ""}</p>
            </div>
        </div>
    );
}
