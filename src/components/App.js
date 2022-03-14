import React, {useState} from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js";

function App() {
  //console.log("Here's your data:", video);

  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);

  const [comments, setComments] = useState([...video.comments]);
  const [showComments, setShowComments] = useState(true);

  function handleUpVote(){
    setUpVotes((upVotes) => ++upVotes);
  }

  function handleDownVote(){
    setDownVotes((downVotes) => ++downVotes);
  }

  function handleComments(){
    setShowComments((showComments) => !showComments);
  }

  return (
    <div className="App">
      <Video 
      videoURL={video.embedUrl} 
      title={video.title} 
      views={video.views} 
      createdAt={video.createdAt}
      upVotes={upVotes}
      downVotes={downVotes}
      handleUpVote={handleUpVote}
      handleDownVote={handleDownVote}
      handleComments={handleComments}
      commentBool={showComments}
      />
      <Comments comments={comments}
      commentBool={showComments}
      />
    </div>
  );
}

export default App;
