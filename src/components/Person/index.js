import React from "react";

const Person = ({ name, age, hobbies }) => {
  const h3style = {marginLeft: "2em"};
  const ulstyle = {marginLeft: "4em"};
  return (
    <div>
      <h2>
        Learn some information about{" "}
        {name.length > 8 ? name.substr(0, 6) : name}.
      </h2>
      {age >= 21 ? (
        <h3 style={h3style}>Age {age}: Have a drink! If you drink, that is.</h3>
      ) : (
        <h3 style={h3style}>Age {age}: I guess you're not old enough for a drink, anyway.</h3>
      )}
      <h4 style={ulstyle}>Hobbies</h4>
      <ul style={ulstyle}>
        {hobbies.map(x => {
          return <li key={x} style={{display: 'list-item', listStyleType: 'initial', marginLeft: '3em'}}>{x}</li>
        })}
      </ul>
      <br />
    </div>
  );
};

export default Person;
