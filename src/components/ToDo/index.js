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
    <div style={{ display: "flex", textAlign: "left", marginLeft: "25%" }}>
      <div className="buttons">
        <input type="submit" value={isEditing ? "Save Changes" : "Edit"} onClick={onEditTask} />
      </div>
      {!isEditing ? (
        <>
          <div className="buttons">
            <input
              type="submit"
              value="Delete"
              onClick={() => onDelete(task)}
            />
          </div>
          <input className="check" type="checkbox" value={task} onClick={() => setIsFinished(!isFinished)} />
          {!isFinished ? (
            <span>{task}</span>
          ) : (
            <span className="finished">{task}</span>
          )}
        </>
      ) : (
        <input value={text} onChange={onChange} />
      )}
    </div>
  );
};

export default ToDo;
