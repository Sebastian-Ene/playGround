import "./App.css";
import Toggle from "./components/Toggle";
import DataBind from "./components/DataBind";
import React from "react";
import DisableButton from "./components/DisableButton";
import UpdateParentState from "./components/UpdateParentState";
import UpdateParentState1 from "./components/UpdateParentState1";
import Add2Nums from "./components/Add2Nums";
import Counter from "./components/Counter";
import FetchAndDisplay from "./components/FetchAndDisplay";

function App() {
    return (
        <>
            <h1>Some React stuff</h1>
            <div>
                This page is inspired by
                <a href="https://dev.to/frontendengineer"> Let's Code</a>'s{" "}
                <span> </span>
                <a href="https://dev.to/frontendengineer/10-reactjs-coding-exercises-with-codepen-exercise-and-solution--22k7">
                    React challenge
                </a>
            </div>
            <Toggle />
            <DataBind />
            <DisableButton />
            <UpdateParentState />
            <UpdateParentState1 />
            <Add2Nums />
            <Counter />
            <FetchAndDisplay />
        </>
    );
}

export default App;
