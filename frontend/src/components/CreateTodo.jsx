import React from "react";
import "./CreateTodo.css";

function CreateTodo(){
    return (
        <div className="form-container">
            <input className="input-field" type="text" placeholder="title"></input><br></br>
            <input className="input-field" type="text" placeholder="description"></input><br></br>
            <button className="submit-button" onClick={
                async () => {
                    const title = document.querySelector("input[placeholder='title']").value;
                    const description = document.querySelector("input[placeholder='description']").value;
                    const res = await fetch("http://localhost:3000/todos", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            title,
                            description,
                        }),
                    });
                    const data = await res.json();
                    console.log(data);
                }
            }>Create Todo</button>
        </div>
    );
}

export default CreateTodo;