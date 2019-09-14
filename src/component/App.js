import React, { Component } from 'react'
import CreateUser from "./react-context/ResultButton";
import { LanguageStore } from "../contexts/LanguageContext";
import ButtonSelector from "./react-context/ButtonSelector";
import Hooks from './react-hooks/Hooks'


export default class App extends Component {

  render() {
    return (
      <div>
        <LanguageStore>
          <p>React Context</p>
          <ButtonSelector />
          <CreateUser />

          <br/>
          <p>React Hooks (useState, useEffect)</p>
          <Hooks/>
        </LanguageStore>
      </div>
    )
  }
}
