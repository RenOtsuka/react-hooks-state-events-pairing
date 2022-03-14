import React from "react";


function Comments({comments, commentBool}){

    const commentList = comments.map(comment => {
        return (
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        );
    });

    return(
       <div>
           {commentBool ? <><h2>{`${comments.length} Comments`}</h2>{commentList}</> : null}
       </div>
    );
    
}

export default Comments;