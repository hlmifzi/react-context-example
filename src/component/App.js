import React, { Component } from 'react'
import CreateUser from "./ButtonLanguage";
import LanguageContext from "../contexts/LanguageContext";


export default class App extends Component {
  state = {bahasa: "english" }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({bahasa: 'english'})}>English</button>
        <button onClick={() => this.setState({bahasa: 'indonesia'})}>Indonesia</button>
      <LanguageContext.Provider value={this.state}>
        <CreateUser/>
      </LanguageContext.Provider>
      </div>
    )
  }
}
