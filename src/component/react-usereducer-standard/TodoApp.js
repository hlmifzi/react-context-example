import React, { useEffect } from "react";
import { initialState, reducer } from "./reducer";
import { useReducer, useState } from "reinspect"
import ListTodos from './ListTodos'
const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState, 'getData');
    const [text, setText] = useState();
    console.log('cwm')
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "add-todo", text });
        setText("");
    }

    const getData = e => {
        //data fet for rest
        let data = {
            todos: [
                {
                    text: 'tes detch',
                    completed: true
                }
            ],
            todoCount: 1
        }
        dispatch({ type: "get-list", payload: data });
        setText("");
    }

    useEffect(() => {
        getData()
        console.log('cdm')
    }, [])

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