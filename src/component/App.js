import React from 'react'
import CreateUser from "./react-context/ResultButton";
import { LanguageStore } from "../contexts/LanguageContext";
import { hot } from "react-hot-loader";

import ButtonSelector from "./react-context/ButtonSelector";
import Hooks from './react-hooks/Hooks'
import TodoApp from './react-usereducer-standard/TodoApp'
import { useState, StateInspector } from "reinspect"

function App() {
  return (
    <StateInspector name="Example">
      <Apps />
    </StateInspector>
  )
}
const Apps = () => {
  const [count, setCount] = useState(0, "count")

  return (
    <div>
      <LanguageStore>
        <p>React Context</p>
        <ButtonSelector />
        <CreateUser />

        <br />
        <p>React Hooks (useState, useEffect)</p>
        <Hooks />
      </LanguageStore>

      <br />
      <p>React Hooks (usestateReinspect with reinspect)</p>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <br />
      <p>React Hooks (useReducer with reinspect)</p>
      <TodoApp />
    </div>
  )
}


// export default hot(module)(App);
export default hot(module)(App);
