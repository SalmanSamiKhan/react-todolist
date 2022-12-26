import React, { useState } from "react";

function TodoItem(props) {
  const [state, setState] = useState(false);
  function handleClick(events) {
    setState((preVal) => {
      return !preVal;
    });
  }

  // CSS
  const mystyle = {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    alignItems: "center",
    overflowWrap: "anywhere"
  };
  const deleteStyle = {
    all: "unset"
  };

  return (
    <div className="todo" style={mystyle}>
      <input onClick={handleClick} type="checkbox"></input>
      <li style={{ textDecoration: state ? "line-through" : "none" }}>
        {props.todo}
      </li>
      <div
        className="delete"
        onClick={() => {
          props.onCross(props.id);
        }}
      >
        <button style={deleteStyle} type="submit">
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
