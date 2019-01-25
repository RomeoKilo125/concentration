import React, { Component } from "react"
import cards from './cards.json'
import Card from './components/Card'

class App extends Component {


  render() {
    return (
      cards.map(
      e => <Card data={e} />
    )
    )
  }
}

export default App
