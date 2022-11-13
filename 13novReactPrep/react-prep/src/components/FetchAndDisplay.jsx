import React from "react";
import { useEffect, useState } from "react";

export default function FetchAndDisplay() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const [userData, setUserData] = useState({});
    useEffect(() => {
        (async () => {
            const dataResp = await fetch(url);
            const apiData = await dataResp.json();
            setUserData(apiData);
        })();
    });
    return (
        <div className="exercise">
            <h2>Fetch and display data</h2>
            <div className="App">
                <h2>User Data</h2>
                <p>
                    <strong>Name: </strong>{" "}
                    {userData.name || "(Need to populate name here)"}
                </p>
                <p>
                    <strong>Website: </strong>
                    {userData.website || "(Need to populate website here)"}
                </p>
                <p>
                    <strong>Email: </strong>
                    {userData.email || "(Need to populate email here)"}
                </p>
                <p>
                    <strong>Phone: </strong>
                    {userData.phone || "(Need to populate phone here)"}
                </p>
            </div>
        </div>
    );
}
