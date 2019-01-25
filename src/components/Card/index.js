import React from 'react'
import './index.css'

class Card extends React.Component {

  render() {
    return (
      <img src={this.props.data.image} alt={this.props.data.name} />
    )
  }
}

export default Card
