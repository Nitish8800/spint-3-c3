import React from "react";
import { useState } from "react";
// import "./App.css";
// import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="todo-app">
      {/* <h1>Todo App</h1> */}
      <TodoForm />
    </div>
  );
}

export default App;
