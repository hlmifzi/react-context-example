import React, { Component } from 'react'
import { LanguageContext } from "../../contexts/LanguageContext";
import { Button } from "shards-react";

export default class ResultButton extends Component {
  static contextType = LanguageContext

  render() {

    const text = this.context.bahasa === 'english' ? 'eat' : 'makan'
    const color = this.context.color

    return (
      <div className="ui inverted segment">
        <Button theme={`${color}`}>
          {text}
        </Button>
      </div>
    )
  }
}
