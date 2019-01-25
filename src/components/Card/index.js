import React, {Component} from 'react'
import './style.css'

class Card extends Component {
state = {
  clicked: this.props.clicked
}
  render() {
    return (
      <img src={this.props.image} alt={this.props.name} onClick={() => this.props.click(this.props.id)}/>
    )
  }
}

export default Card
