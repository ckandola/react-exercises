import React, { useState } from 'react';
import Tweet from './Tweet';

const TweetContainer = () => {    
    const [userName, setUserName] = useState('new_user');
    const [name, setName] = useState('Rick');
    const [text, setText] = useState('');
    const [tweets, setTweets] = useState(
        [{
            username:"chickensrock",
            name:"ed",
            date:"6/05/1999",
            message:"Gravy!"
        },
        {
            username:"Mucho-Dinero",
            name:"eddy",
            date:"7/02/1999",
            message:"If elected, inflation will be a thing of the gas!"
        },
        {
            username:"my_kingdom_for_sunscreen",
            name:"edd",
            date:"7/05/1999",
            message:"Messy, messy, messy!",
        }]
    );
    
    const maxLen = 280;

    const handleSubmit = e => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }
        createTweet(text);
        setText('');
    }

    const createTweet = message => {
        const tempTweets = tweets.slice();
        const date = new Date();
        tempTweets.push(
            {
                username: userName,
                name: name,
                message: message,
                date: 
                    `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} 
                    (${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()})`
            }
        )
        setTweets(tempTweets);
    }

    const handleChange = (event, settingName) => {
        switch(settingName) {
            case 'name':
                setName(event.target.value);
                break;
            case 'message':
                if (text.length < maxLen) {
                    setText(event.target.value);
                }
                break;
            case 'username':
                setUserName(event.target.value);
                break;
            default:
                console.log('Huh? What are you trying to set?');
                break;
        }
    }

    return (
        <section className="tweet-section">
            <form className="tweet-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    value={userName} 
                    onChange={e => handleChange(e, 'username')}
                />
                
                <label htmlFor="name">Display Name</label>
                <input type="text" id="name" value={name} onChange={e => handleChange(e, 'name')}/>
                
                <div className="tweet-message-input-box">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" 
                        cols="30" rows="3"
                        placeholder={`Enter up to ${maxLen} characters`}
                        value={text}
                        onChange={e => handleChange(e, 'message')}
                        ></textarea>
                    <input type="submit" value="Tweet"/>
                </div>
            </form>
            {tweets.map((tweet, index) => {
                return (
                    <Tweet key={index}
                        username={tweet.username}
                        name={tweet.name}
                        date={tweet.date}
                        message={tweet.message}
                    />
                )
            })}
        </section>
    )
};

export default TweetContainer;
