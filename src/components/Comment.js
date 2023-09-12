import React, { useState } from "react";
import VoteButton from "./VoteButton";

function Comment({comment, updownobj, handleClick})
{
    console.log("comment = ", comment);
    console.log("updownobj = ", updownobj);

    return (
        <div id={comment.id}>
            <h2>{comment.user}
            <VoteButton type="UP" num={updownobj.upvotes}
                handleClick={(event) => handleClick(true, updownobj)} />
            <VoteButton type="DOWN" num={updownobj.downvotes}
                handleClick={(event) => handleClick(false, updownobj)} />
            </h2>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;
