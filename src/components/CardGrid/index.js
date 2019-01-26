import React, {Component} from "react"
import Card from '../Card'
import './style.css'

class CardGrid extends Component {

  render() {
    return (<div id='cardGrid'>{
      this.props.cards.map(e => <Card key={e.id} id={e.id} clicked={e.clicked} name={e.name} image={e.image} click={this.props.click}/>)
    }</div>)

  }
}

export default CardGrid
