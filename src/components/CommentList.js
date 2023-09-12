import React, {useState} from "react";
import Comment from "./Comment";

//button to hide/show comments
//section dividing line

function CommentList({comments})
{
    const [showComments, setShowComments] = useState(true);
    
    let myinitcommentvotesobjs = new Array();
    if (comments === undefined || comments === null || comments.length < 1);
    else
    {
        myinitcommentvotesobjs = comments.map((comment, index) => {
            let mynwobj = {
                id: comment.id,
                upvotes: 0,
                downvotes: 0
            };
            return mynwobj;
        });
    }
    
    const [votesForCommentObjs, setVotesForCommentObjs] = useState(myinitcommentvotesobjs);

    console.log("comments = ", comments);
    console.log("votesForCommentObjs = ", votesForCommentObjs);

    let commentsSectionTitleText = null;
    if (comments === undefined || comments === null) commentsSectionTitleText = "0 Comments";
    else
    {
        commentsSectionTitleText = "" + comments.length + " Comment" +
            ((comments.length === 1) ? "" : "s");
    }

    function handleClick(event)
    {
        setShowComments(!showComments);
    }

    function incramentCommentUpOrDownVotes(useupvotes, oldupvoteobj)
    {
        console.log("useupvotes = " + useupvotes);
        console.log("OLD oldupvoteobj = ", oldupvoteobj);
        
        let newobj = {...oldupvoteobj};
        if (useupvotes) newobj.upvotes++;
        else newobj.downvotes++;
        console.log("NEW newobj = ", newobj);

        let nwvotes = votesForCommentObjs.map((vtcmt) => {
            if (vtcmt.id === newobj.id) return newobj;
            else return vtcmt;
        });
        setVotesForCommentObjs(nwvotes);
    }

    let commentobjs = null;
    if (comments === undefined || comments === null || comments.length < 1);
    else
    {
        
        commentobjs = comments.map((comment) =>
        {
            //need to get the appropriate object
            const myitemindx = votesForCommentObjs.findIndex((cmtobj) => cmtobj.id === comment.id);
            console.log("myitemindx = " + myitemindx);

            if (myitemindx < 0 || myitemindx > votesForCommentObjs.length - 1 &&
                votesForCommentObjs.length > 0)
            {
                throw new Error("illegal index found and used for the comment votes object! It must be " +
                    "found, but it was not!");
            }
            //else;//do nothing
            console.log("votesForCommentObjs[" + myitemindx + "] = ", votesForCommentObjs[myitemindx]);

            return (
                <Comment key={comment.id} comment={comment}
                updownobj={votesForCommentObjs[myitemindx]}
                handleClick={incramentCommentUpOrDownVotes} />
            );
        });
    }

    return (
        <div>
            <button onClick={handleClick}>{showComments ? "Hide" : "Show"} Comments</button>
            {showComments ? (
                <>
                    <section style={{borderWidth: "1px", borderColor: "black", borderStyle: "solid"}} />
                    <h1>{commentsSectionTitleText}</h1>
                    {commentobjs}
                </>
            ) : null}
        </div>
    );
}

export default CommentList;
