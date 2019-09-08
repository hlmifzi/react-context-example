import React, { Component } from 'react'
import CreateUser from "./ResultButton";
import { LanguageStore } from "../contexts/LanguageContext";
import ButtonSelector from "./ButtonSelector";


export default class App extends Component {

  render() {
    return (
      <div>
        <LanguageStore>
          <ButtonSelector />
          <CreateUser />
        </LanguageStore>
      </div>
    )
  }
}
