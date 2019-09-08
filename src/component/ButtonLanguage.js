import React, { Component } from 'react'
import { LanguageContext, ColorContext } from "../contexts/LanguageContext";
import { Button } from "shards-react";

export default class ButtonLanguage extends Component {
  // static contextType = LanguageContext v1 //no user caontext consumer

  renderBahasa(value) {
    return value === 'english' ? 'eat' : 'makan'
  }

  renderButton(color) {
    return (
      <Button theme={`${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderBahasa(value)}
        </LanguageContext.Consumer>
      </Button>
    )
  }

  render() {

    // const text = this.context.bahasa === 'english' ? 'eat' : 'makan' v1 //no user caontext consumer

    return (
      <div class="ui inverted segment">
        <ColorContext.Consumer>
          {(color) => this.renderButton(color)}
        </ColorContext.Consumer>
      </div>
    )
  }
}
