import React, { useState } from "react";

const Task = ({ title, setTodos, todos }) => {
  return (
    <div>
      <span>{title}</span>
      <button onClick={e => setTodos(todos.filter(todo => todo !== title))}>
        X
      </button>
    </div>
  );
};

const TODO = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span>Enter task</span>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!todos.includes(input)) {
            setTodos(todos => [...todos, input]);
          }
          setInput("");
        }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ marginTop: "15px", border: "solid" }}
        />
      </form>
      {todos.map(todo => {
        return (
          <Task
            key={todo}
            title={todo}
            setTodos={setTodos}
            todos={todos}
          ></Task>
        );
      })}
      {todos.length > 0 && (
        <button
          onClick={e => setTodos([])}
          style={{ background: "red", color: "white" }}
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default TODO;
