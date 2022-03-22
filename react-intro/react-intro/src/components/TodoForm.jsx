import React from "react";
import { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 1000),
    //   text: input,
    // });

    setInput("");
  };

  return (
    <form clasName="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
      />

      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoForm;
