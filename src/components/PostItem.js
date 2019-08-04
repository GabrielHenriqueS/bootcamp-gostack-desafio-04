import React from "react";

export default function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <div className="header">
        <img className="avatarImg" src={author.avatar} />
        <div className="avatar">
          <strong>{author.name}</strong>
          <span>{date}</span>
        </div>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatarImg" src={comment.author.avatar} />
          <p>
            <strong>{comment.author.name}</strong> {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}
