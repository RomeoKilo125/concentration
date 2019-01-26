import React, {Component} from "react"
import './style.css'

class ScoreBox extends Component {

  render() {
    return (
      <div id='scoreBox'>
        <div id='score'>Score: {this.props.score}</div>
        <div id='hiScore'>High Score: {this.props.hiScore}</div>
      </div>
    )
  }
}

export default ScoreBox
