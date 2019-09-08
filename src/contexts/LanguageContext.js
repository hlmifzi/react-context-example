import React, { createContext, Fragment, Component } from 'react'

export const LanguageContext = createContext({ bahasa: 'english' })
export const ColorContext = createContext('success')


export class LanguageStore extends Component {
  state = { bahasa: "english", color: 'success' }

  onLanguageChange = bahasa => {
    this.setState({bahasa})
  }

  render() {
    return (
      <Fragment>
          <LanguageContext.Provider value={{...this.state, onLanguageChange:this.onLanguageChange}}>
            {this.props.children}
          </LanguageContext.Provider>
      </Fragment>
    )
  }
}

