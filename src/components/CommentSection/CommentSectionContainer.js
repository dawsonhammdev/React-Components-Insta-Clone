// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log(props, "from comments")
  // Add state for the comments
  const [commentData] = useState(props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {commentData.map(c => (
        <Comment comment={c} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
