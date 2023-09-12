import React from "react";

function VoteButton({type, num, handleClick})
{
    console.log("type = " + type);
    console.log("num = " + num);
    if (num === undefined || num === null || isNaN(num)) throw new Error("num must be a defined number!");
    else
    {
        if (num < 0) throw new Error("num must be at least zero!");
        //else;//do nothing
    }
    if (handleClick === undefined || handleClick === null)
    {
        throw new Error("handleClick must be a function!");
    }
    //else;//do nothing
    if (type === undefined || type === null) throw new Error("type must be UP or DOWN!");
    else
    {
        if (type === "Up" || type === "UP" || type === "DOWN" || type === "Down");
        else throw new Error("type must be UP or DOWN!");
    }
    const typeisup = (type === "Up" || type === "UP");

    return (
        <button onClick={handleClick}>{typeisup ? "👍": "👎"} {num}</button>
    );
}

export default VoteButton;
