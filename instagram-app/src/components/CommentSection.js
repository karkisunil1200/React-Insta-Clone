import React from 'react';

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return <p>{comment.text}</p>;
      })}
    </div>
  );
};

export default CommentSection;
