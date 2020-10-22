import React, { useState } from "react";
import ToDo from "../ToDo";
import "./ToDoList.css";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    "study",
    "work",
    "clean",
    "dust",
    "feed the pets",
    "eat"
  ]);
  let textInput = React.createRef();

  const onSubmit = () => {
    if (text && !todos.includes(text)) {
      const todoCopy = todos.slice();
      todoCopy.push(text);
      setTodos(todoCopy);
      setText("");
      textInput.current.focus();
    }
  };

  const onDelete = taskName => {
    const todoCopy = todos.filter(x => x !== taskName);
    setTodos(todoCopy);
  };

  const onChange = event => {
    setText(event.target.value);
  };

  const onEdit = (newTask, oldTask) => {
    const todoCopy = todos.slice();
    const index = todoCopy.indexOf(oldTask);
    todoCopy[index] = newTask;
    setTodos(todoCopy);
  };

  return (
    <div>
      <h1 className="header">React Header:</h1>
      <ul>
        {todos.map(item => {
          return (
            <ToDo key={item} task={item} onDelete={onDelete} onEdit={onEdit} />
          );
        })}
      </ul>
      <div className="textEntry">
        <input
          className="entry"
          type="text"
          onChange={onChange}
          value={text}
          ref={textInput}
        />
        <input type="submit" value="Add New Task" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default ToDoList;
