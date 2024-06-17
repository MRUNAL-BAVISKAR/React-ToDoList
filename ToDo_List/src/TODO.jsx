import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css"; 

export default function Todo() {
    let [todos, settodos] = useState([{ task: "Sample-Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setnewTodo] = useState("");

    let addNewtask = () => {
        settodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setnewTodo("");
    };

    let updateTodoValue = (event) => {
        setnewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        settodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
    };

    let upperCaseAll = () => {
        settodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };

    let markAsDone = (id) => {
        settodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div className="body">
            <div className="header">
                <input
                    placeholder="Add a Task"
                    value={newTodo}
                    onChange={updateTodoValue}
                    className="Task"
                />
                <button onClick={addNewtask} className="button_one">Add Task</button>
            </div>
            <h4>ToDo List</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        <button className="MarkAsDone" onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <br />
            <button className="upperCaseAll" onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}
