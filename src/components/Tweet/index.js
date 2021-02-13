import React from "react";
import "./Tweet.css";

const Tweet = ({ username, name, date, message }) => {
  return (
    <>
      <div className="tweet-box-outer">
        <div className="tweet-name">{`${name.toUpperCase()}`}</div>
        <span className="user">@{username}</span>
        <div className="tweet-box-inner">
          <div className="message">{message}</div>
          <p className="date">{`${date}`}</p>
        </div>
      </div>
    </>
  );
};

export default Tweet;
