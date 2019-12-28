import React from "react";
import { initialState, reducer } from "./reducer";
import { useReducer, useState } from "reinspect"
import ListTodos from './ListTodos'
const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState, 'getData');
    const [text, setText] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "add-todo", text });
        setText("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input value={text} onChange={e => setText(e.target.value)} />
            </form>
            <div>number of todos: {state.todoCount}</div>
            <ListTodos />
        </>
    );
}
export default TodoApp;