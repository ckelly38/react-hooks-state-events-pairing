import React from "react";
import VoteButton from "./VoteButton";

function Header({title, numviews, date, upvotes, downvotes, handleClick})
{
    return (
        <div>
            <h1>{title}</h1>
            <h3>{numviews} View{numviews === 1 ? "" : "s"} | Uploaded {date}</h3>
            <VoteButton type="UP" num={upvotes} handleClick={(event) => handleClick(true)} />
            <VoteButton type="DOWN" num={downvotes} handleClick={(event) => handleClick(false)} />
        </div>
    );
}

export default Header;
