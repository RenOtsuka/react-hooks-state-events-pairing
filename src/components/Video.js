import React from "react";

function Video({videoURL, title, views, createdAt, upVotes, downVotes, handleUpVote, handleDownVote, handleComments, commentBool}){
    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={videoURL}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <p>{`${views} Views | Uploaded ${createdAt}`}</p>
            <button onClick={handleUpVote}>{upVotes}👍</button>
            <button onClick={handleDownVote}>{downVotes}👎</button>
            <br/>
            <br/>
            <button onClick={handleComments}>{commentBool ? "Hide Comments" : "Show Comments"}</button>          
        </div>
        
    );
}   

export default Video;