import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {

    let [todos, settodos] = useState([{ task: "Sample-Task", id: uuidv4(), isDone:false }]);
    let [newTodo, setnewTodo] = useState("");

    let addNewtask = () => {
        settodos((prevTodos) => {
            return [...todos, { task: newTodo, id: uuidv4() , isDone:false }];
        });
        setnewTodo("");
    };
    let updateTodoValue = (event) => {
        setnewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        settodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
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

let MarkASDone= (id) => {
    settodos((prevTodos) =>
        prevTodos.map((todo) => {
            if(todo.id == id){
                return {
                    ...todo,
                    isDone: true,
                };
            }else{
                return todo;
            }
           
        })
    );
};

    return (
        <div>
            <input placeholder="Add a Task"
                value={newTodo}
                onChange={updateTodoValue}></input>
            <button onClick={addNewtask}>Add Tasks to do</button>
            <h4>ToDo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>
                      
                                {todo.task}
                            </span>
                            <button onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
            </ul>
            <br>
            </br>
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={MarkASDone}>Mark As Done</button>
        </div>
    )
}