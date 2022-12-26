import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [text, setText] = useState(""); // for managing form data
  const [item, setItem] = useState([]); // for managing todo items on array
  function handleChange(event) {
    // coming from form
    setText(event.target.value);
  }
  function handleClick(preVal) {
    if (text.length > 0) {
      setItem((preVal) => {
        // previous value -> array of todo items
        return [...preVal, text]; // using SPREAD. preVal +  new todo added to array
      });
    }

    setText(""); // clear placeholder
  }
  function deleteItem(id) {
    setItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        text={text}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <div>
        {item.map(function (todo, index) {
          // using map show all items on array
          return (
            <TodoItem key={index} id={index} todo={todo} onCross={deleteItem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
