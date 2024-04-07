// This component contains the main logic for the todo app It fetches the todos from the backend and displays them in a list.
import React from "react";
import "./Todos.css";

function Todos({todos}){
    return (
        <div className="todos-container">
            {todos.map(todo => {
                return (
                    <div key={todo.id} className="todo-item">
                        <h1 className="todo-title">{todo.title}</h1>
                        <p className="todo-description">{todo.description}</p>
                        <button className="todo-button">{todo.completed === true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Todos;