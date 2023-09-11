import React from "react";

function VoteButton({type, num, handleClick})
{
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
