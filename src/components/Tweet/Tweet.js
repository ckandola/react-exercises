import React from "react";
import "./Tweet.css";
import { IoChatbubbleOutline } from 'react-icons/io5';
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { FiUpload } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Tweet = ({ username, name, date, message }) => {
  return (
    <>
      <div className="tweet-box-outer">
        <span className="tweet-span">
          <div className="tweet-name">{`${name.toUpperCase()}`}</div>
          <div className="tweet-separator">{'·'}</div>
          <div className="tweet-user">
            <a href={`https://twitter.com/${username}`}>
              @{username}
            </a>
          </div>
          <div className="tweet-separator">{'·'}</div>
          <div className="tweet-date">{`${date}`}</div>
        </span>
        <div className="tweet-box-inner">
          <div className="tweet-message">{message}</div>
          <span className="tweet-btn-span">
            <button className="tweet-btn">
              <IoChatbubbleOutline />
            </button>
            <button className="tweet-btn">
              <AiOutlineRetweet />
            </button>
            <button className="tweet-btn">
              <AiOutlineHeart />
            </button>
            <button className="tweet-btn">
              <FiUpload />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Tweet;

Tweet.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
};
