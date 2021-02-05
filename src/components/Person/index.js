import React from "react";

const Person = ({ name, age, hobbies }) => {
  return (
    <div>
      <h2>
        Learn some information about{" "}
        {name.length > 8 ? name.substr(0, 6) : name}.
      </h2>
      {age >= 21 ? (
        <h3>Age {age}: Have a drink! If you drink, that is.</h3>
      ) : (
        <h3>Age {age}: I guess you're not old enough for a drink, anyway.</h3>
      )}
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map(x => {
          return <li key={x} style={{display: 'list-item', listStyleType: 'initial', marginLeft: '3em'}}>{x}</li>
        })}
      </ul>
    </div>
  );
};

export default Person;
