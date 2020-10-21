import React from "react";
import "./Tweet.css";

const Tweet = ({ username, name, date, message }) => {
  return (
    <>
      <div>
        <span className="user">{username}</span>
        <span className="name">({name})</span>:
        <span className="message">{message}</span>
      </div>
      <p className="date">{`--- ${date}`}</p>
    </>
  );
};

export default Tweet;
