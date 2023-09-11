import React, {useState} from "react";

//button to hide/show comments
//section dividing line

function CommentList(props)
{
    const [showComments, setShowComments] = useState(true);
    const [myComments, setMyComments] = useState([]);
    let commentsSectionTitleText = null;
    if (myComments === undefined || myComments === null) commentsSectionTitleText = "0 Comments";
    else
    {
        commentsSectionTitleText = "" + myComments.length + " Comment" +
            ((myComments.length === 1) ? "" : "s");
    }

    function handleClick(event)
    {
        setShowComments(!showComments);
    }

    return (
        <div>
            <button onClick={handleClick}>{showComments ? "Hide" : "Show"} Comments</button>
            {showComments ? (
                <>
                    <section style={{borderWidth: "1px", borderColor: "black", borderStyle: "solid"}} />
                    <h1>{commentsSectionTitleText}</h1>
                    {/*comments*/}
                </>
            ) : null}
        </div>
    );
}

export default CommentList;
