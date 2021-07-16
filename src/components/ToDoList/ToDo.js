import React, { useState } from "react";
import "./ToDo.css";

const ToDo = ({ task, onDelete, onEdit }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task);


  const onEditTask = () => {
    if (isEditing) {
      onEdit(text, task);
    }
    setIsEditing(!isEditing);
  };

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div className="todo-main">
      <div className="todo-buttons">
        <input type="submit" value={isEditing ? "Save Changes" : "Edit"} onClick={onEditTask} className="todo-submit"/>
      </div>
      {!isEditing ? (
        <>
          <div className="todo-buttons">
            <input
              type="submit"
              value="Delete"
              className="todo-submit"
              onClick={() => onDelete(task)}
            />
          </div>
          <input className="todo-check" type="checkbox" value={task} onClick={() => setIsFinished(!isFinished)} />
          {!isFinished ? (
            <span>{task}</span>
          ) : (
            <span className="todo-finished">{task}</span>
          )}
        </>
      ) : (
        <input className="todo-entry" value={text} onChange={onChange} />
      )}
    </div>
  );
};

export default ToDo;
