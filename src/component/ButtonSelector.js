
import React, { Component } from 'react'
import {LanguageContext} from "../contexts/LanguageContext";

export default class ButtonSelector extends Component {
  static contextType = LanguageContext

  render() {
    console.log(this.context);
    return (
      <div>
        <button onClick={()=>this.context.onLanguageChange('english')}>English</button>
        <button onClick={()=>this.context.onLanguageChange('indonesia')}>Indonesia</button>
    </div>
    )
  }
}
