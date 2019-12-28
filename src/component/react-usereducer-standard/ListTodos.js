import React from "react";
import { initialState, reducer } from "./reducer";
import { useReducer } from "reinspect"

const ListTodos = () => {
    const [state, dispatch] = useReducer(reducer, initialState, 'getData');

    const handleCompletedTas = (idx) => {
        dispatch({ type: "toggle-todo", idx })
    }
    console.log("TCL: ListTodos -> state.todos", state.todos)

    return (
        <>
            <div>number of todos: {state.todoCount}</div>
            {state.todos.map((v, idx) => (
                <div key={idx}
                    onClick={() => handleCompletedTas(idx)}
                    style={{ textDecoration: v.completed ? "line-through" : "" }}
                >
                    {v.text}
                </div>
            ))}
        </>
    );
}
export default ListTodos;