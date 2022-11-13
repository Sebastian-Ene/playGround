import React from "react";
import "./UpdateParentState.css";

function Child(props) {
    const onButtonClick = (ev) => {
        props.valueSetter(" Done :)");
    };
    return (
        <>
            <div>Child</div>
            <button onClick={onButtonClick}>Change Parent Value</button>
        </>
    );
}

export default function UpdateParentState() {
    const [value, setValue] = React.useState(
        "I need to be updated from my child"
    );
    return (
        <div className="exercise">
            <h2>Update Parent State Props</h2>
            <div className="wrapper">
                <div>Parent</div>
                <div className="box-wrapper">{value}</div>
                <div className="wrapper">
                    <Child valueSetter={setValue} />
                </div>
            </div>
        </div>
    );
}
