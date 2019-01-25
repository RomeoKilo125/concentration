import React, {Component} from "react"
import cards from './cards.json'
import Card from './components/Card'
import './App.css'

class App extends Component {
  state = {
    cards,
    score: 0
  }

  shuffleArray = arr => {
    arr
    .map(a => [Math.random(), a])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1])
  }

  resetGame = () => {
    console.log(`reset game`)
  }

  handleClick = id => {
    console.log(`click ${id}`)
    let newCards = this.state.cards.map(c => {
      if (c.id === id) {
        if (c.clicked === false) {
          c.clicked = true
        } else {
          this.resetGame()
        }
      }
      return c
    })
    this.setState({cards: newCards})
  }

  render() {
    return (this.state.cards.map(e => <Card key={e.id} id={e.id} clicked={e.clicked} name={e.name} image={e.image} click={this.handleClick}/>))
  }
}

export default App
