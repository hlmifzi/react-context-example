export const initialState = localStorage.getItem('reduxState') ?
    JSON.parse(localStorage.getItem('reduxState')) :
    {
        todos: [],
        todoCount: 0
    }

const setReduxState = (obj) => localStorage.setItem('reduxState', JSON.stringify(obj))

export const reducer = (state, action) => {
    let res
    switch (action.type) {
        case "add-todo":
            res = {
                todos: [...state.todos, { text: action.text, completed: false }],
                todoCount: state.todoCount + 1
            };
            setReduxState(res)
            return res
        case "toggle-todo":
            res = {
                todos: state.todos.map((t, idx) =>
                    idx === action.idx ? { ...t, completed: !t.completed } : t
                ),
                todoCount: state.todoCount
            }
            setReduxState(res)
            return res
        default:
            return state;
    }
};