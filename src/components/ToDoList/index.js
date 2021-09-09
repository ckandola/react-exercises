import React, { useState } from "react";
import ToDo from "./ToDo";
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
  const [isEditingAnother, setIsEditingAnother] = useState(false);
  const [error, setError] = useState({value: false, msg: ''});
  let textInput = React.createRef();

  const changeEditing = () => {
    setIsEditingAnother(!isEditingAnother);
  }

  const checkEditingStatus = () => {
    return isEditingAnother;
  }

  const isValidTask = taskName => {
    return (/\S/).test(taskName);
  }

  const onSubmit = () => {
    if (!isValidTask(text)) {
      setError({value: true, msg: 'Cannot add blank space as a task'});
    } else if(todos.includes(text)) {
      setError({value: true, msg: 'This task has already been added'});
    } else {
      setError({value: false, msg: ''});
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
    todoCopy[index] = '';
    if (!todoCopy.includes(newTask)) {
      todoCopy[index] = newTask;
      setTodos(todoCopy);
      return true;
    }
    return false;
  };

  return (
    <div className="todo-background">
      <h2 className="todo-header">ToDo List:</h2>
      <ul>
        {todos.map(item => {
          return (
            <ToDo key={item} task={item} onDelete={onDelete} onEdit={onEdit} isEditingAnother={checkEditingStatus} changeEditing={changeEditing} />
          );
        })}
      </ul>
      <div className="todo-textEntry">
        <input
          className="todo-entry"
          type="text"
          onChange={onChange}
          value={text}
          ref={textInput}
        />
        <input type="submit" value="Add New Task" onClick={onSubmit} />
      </div>
      {error.value && (
        <p className="todo-add-error">{error.msg}</p>
      )}
    </div>
  );
};

export default ToDoList;
