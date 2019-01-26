import React, {Component} from "react"
import './style.css'

class ScoreBox extends Component {

  render() {
    return (
      <div>Score: {this.props.score}</div>
    )
  }
}

export default ScoreBox
