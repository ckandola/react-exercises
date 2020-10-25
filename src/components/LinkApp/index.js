import React, { useState } from "react";
import CustomLink from "../CustomLink";

// doesn't work...

const LinkApp = () => {
  const [links, setLinks] = useState([
    {
      id: 0,
      href: "https://google.com/",
      text: "Hey, it's Google!",
      handleClick: () => handleClick("Google")
    },
    {
      id: 1,
      href: "https://faithlife.com/",
      text: "Hey, it's Faithlife!",
      handleClick: () => handleClick("Faithlife")
    },
    {
      id: 2,
      href: "localhost:3000/",
      text: "It's the basic editor...",
      handleClick: () => handleClick("localhost!")
    }
  ]);
  const handleClick = name => {
    console.log("Have fun at " + name + "!");
  };

  const onDisable = () => {
    const linkCopy = links.slice().map(x => {
      x.href = "a";
    });
    setLinks(linkCopy);
  };

  const listOfLinks = links.map(link => {
    return (
      <div key={link.id}>
        <CustomLink
          href={link.href}
          text={link.text}
          handleClick={link.handleClick}
        />
      </div>
    );
  });

  return (
    <div>
      <button onClick={onDisable}>{"DISABLE LINKS"}</button>
      <div>
        <ul>{listOfLinks}</ul>
      </div>
    </div>
  );
};

export default LinkApp;
