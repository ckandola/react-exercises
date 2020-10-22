import React from "react";

const Person = ({ name, age, hobbies }) => {
  return (
    <div>
      <p>
        Learn some information about{" "}
        {name.length > 8 ? name.substr(0, 6) : name}.
      </p>
      {age >= 21 ? (
        <h3>Have a drink! If you drink, that is.</h3>
      ) : (
        <h3>I guess you're not old enough for a drink, anyway.</h3>
      )}
      <ul>
        {hobbies.map(x => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default Person;
