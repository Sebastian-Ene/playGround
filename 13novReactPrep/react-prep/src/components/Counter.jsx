import React from "react";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const incrementfunc = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementfunc = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <div className="exercise">
            <h2>Counter</h2>
            <div>
                <h2>Counter: {counter}</h2>
                <button onClick={incrementfunc}>Increment</button>
                <button onClick={decrementfunc}>Decrement</button>
            </div>
        </div>
    );
}
