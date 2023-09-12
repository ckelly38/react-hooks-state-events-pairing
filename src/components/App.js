import React, {useState} from "react";
import video from "../data/video.js";
import CommentList from "./CommentList";
import Header from "./Header";

function App() {
  console.log("Here's your data:", video);

  const [videovotes, setVideoVotes] = useState({
    upvotes: video.upvotes,
    downvotes: video.downvotes
  });

  function incramentVideoUpOrDownVotes(useupvotes)
  {
    console.log("useupvotes = " + useupvotes);
    console.log("OLD videovotes = ", videovotes);
    let nwvidvotes = {...videovotes};
    if (useupvotes) nwvidvotes.upvotes = videovotes.upvotes + 1;
    else nwvidvotes.downvotes = videovotes.downvotes + 1;
    console.log("NEW nwvidvotes = ", nwvidvotes);
    setVideoVotes(nwvidvotes);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Header title={video.title} numviews={video.views} date={video.createdAt}
      upvotes={videovotes.upvotes} downvotes={videovotes.downvotes}
      handleClick={incramentVideoUpOrDownVotes} />
      <CommentList comments={video.comments} />
    </div>
  );
}

export default App;
