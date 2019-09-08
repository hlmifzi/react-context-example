import React, { Component } from 'react'
import CreateUser from "./ButtonLanguage";
import { LanguageContext, ColorContext } from "../contexts/LanguageContext";


export default class App extends Component {
  state = { bahasa: "english", color:'success' }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ bahasa: 'english' })}>English</button>
        <button onClick={() => this.setState({ bahasa: 'indonesia' })}>Indonesia</button>
        <ColorContext.Provider value={this.state.color} >
          <LanguageContext.Provider value={this.state.bahasa}>
            <CreateUser />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}
