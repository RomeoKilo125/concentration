import React, {Component} from "react"
import Card from './components/Card'
import ScoreBox from './components/ScoreBox'
import cards from './cards.json'
import './App.css'

let shuffleArray = arr => arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])

class App extends Component {
  state = {
    cards: shuffleArray(cards),
    score: 0
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
          this.setState({
            score: this.state.score + 1
          })
        } else {
          this.resetGame()
        }
      }
      return c
    })
    this.setState({cards: shuffleArray(newCards)})
  }

  render() {
    return (<div><ScoreBox score={this.state.score}/>
      {this.state.cards.map(e => <Card key={e.id} id={e.id} clicked={e.clicked} name={e.name} image={e.image} click={this.handleClick}/>)}</div>)
      }
      }

      export default App
