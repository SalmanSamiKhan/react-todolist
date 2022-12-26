import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleChange}
        type="text"
        name="text"
        value={props.text}
      />
      <button onClick={props.handleClick} type="submit">
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
