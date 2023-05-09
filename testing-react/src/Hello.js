import React, { useState } from "react";

function Hello() {

    const [name, setName] = useState("");
    return (
        <div>
            <h1 data-testid="my-heading">Hello</h1>
            <button onClick={ () => console.log("I'm Clicked")}></button>
            <input type="text" value={name} onChange={ event => setName(event.target.value)}></input>
        </div>
    )
}

export default Hello;