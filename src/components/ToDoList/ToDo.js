import React, { useState } from "react";
import "./ToDo.css";
import PropTypes from 'prop-types';

const ToDo = ({ task, onDelete, onEdit, isEditingAnother, changeEditing }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task);
  const [error, setError] = useState(false);

  const onEditTask = () => {
    if (isEditing) {
      if (onEdit(text, task)) {
        setIsEditing(false);
        setError(false);
        changeEditing();
      } else {
        setError(true);
      }
    } else {
      // Start Editing
      if (!isEditingAnother()) {
        changeEditing();
        setIsEditing(!isEditing);
      }
    }
  };

  const onUndo = () => {
    setError(false);
    setIsEditing(false);
    setText(task);
    onEdit(task, task);
    changeEditing();
  }

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div className="todo-main">
      <div className="todo-buttons">
        <input type="submit" value={isEditing ? "Save Changes" : "Edit"} onClick={onEditTask} 
          className={`todo-submit ${isEditing ? 'todo-save-changes' : '' }`}/>
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
        <>
          <div className="todo-buttons">
            <input type="submit" value="Undo" className="todo-submit" onClick={onUndo} />
            <input className="todo-entry" value={text} onChange={onChange} />
          </div>
          {error && (
            <p className="todo-error">You've already added that task</p>
          )}
        </>
      )}
    </div>
  );
};

export default ToDo;

ToDo.propTypes = {
  task: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  isEditingAnother: PropTypes.func,
  changeEditing: PropTypes.func
};
