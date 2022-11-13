import React from "react";
import "./UpdateParentState.css";

function Child() {
    const emitEv = () => {
        const ev = new Event("upParent");
        document.dispatchEvent(ev);
    };
    return (
        <>
            <div>Child</div>
            <button onClick={emitEv}>Change Parent Value</button>
        </>
    );
}

export default function UpdateParentState1() {
    const [value, setValue] = React.useState(
        "I need to be updated from my child"
    );
    document.addEventListener("upParent", () => {
        setValue("Done :)");
    });
    return (
        <div className="exercise">
            <h2>Update Parent State Events</h2>
            <div className="wrapper">
                <div>Parent</div>
                <div className="box-wrapper">{value}</div>
                <div className="wrapper">
                    <Child />
                </div>
            </div>
        </div>
    );
}
