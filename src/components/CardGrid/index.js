import React, {Component} from "react"
import Card from './components/Card'
import './style.css'

class CardGrid extends Component {

  render() {
    return ({
      this.props.cards.map(e => <Card key={e.id} id={e.id} clicked={e.clicked} name={e.name} image={e.image} click={this.props.click}/>)
    })

  }
}

export default CardGrid
