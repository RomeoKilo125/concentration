import React, {Component} from "react"
import './style.css'

class ScoreBox extends Component {
  state = {
    score: this.props.score
  }

  render() {
    return (
      <div>Score: {this.state.score}</div>
    )
  }
}

export default ScoreBox
