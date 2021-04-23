import React from "react";
import "./Tweet.css";

const Tweet = ({ username, name, date, message }) => {
  return (
    <>
      <div className="tweet-box-outer">
        <div className="tweet-name">{`${name.toUpperCase()}`}</div>
        <span className="tweet-user">@{username}</span>
        <div className="tweet-box-inner">
          <div className="tweet-message">{message}</div>
          <p className="tweet-date">{`${date}`}</p>
        </div>
      </div>
    </>
  );
};

export default Tweet;
