import React, {Component} from "react"
import CardGrid from './components/CardGrid'
// import Card from './components/Card'
import ScoreBox from './components/ScoreBox'
import cards from './cards.json'
import './App.css'

let shuffleArray = arr => arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1])

class App extends Component {
  state = {
    cards: shuffleArray(cards),
    score: 0,
    hiScore: 0
  }

  resetGame = () => {
    console.log(`reset game`)
    if (this.state.score > this.state.hiScore) {
      this.setState({hiScore: this.state.score})
    }
    this.setState({
      score: 0,
      cards: shuffleArray(this.state.cards.map(c => {
        c.clicked = false
        return c
      }))
    })

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
    return (<div><ScoreBox score={this.state.score} hiScore={this.state.hiScore}/>
      <CardGrid cards={this.state.cards} click={this.handleClick}/>
    </div>)
      }
      }

      export default App
