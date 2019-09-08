import React, { Component } from 'react'
import LanguageContext from "../contexts/LanguageContext";


export default class ButtonLanguage extends Component {
  static contextType = LanguageContext

  render() {

    const text = this.context.bahasa === 'english' ? 'eat' : 'makan'
    
    return (
      <div>
        {text}
      </div>
    )
  }
}
