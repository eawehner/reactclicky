import React, { Component } from 'react';
import './App.css';
import CardList from "./cards.json";
import Card from "./components/Card";
import Nav from "./components/Nav";

class App extends Component {

  //the state where we will track our cards and score

  state = {
    CardList,
    score: 0
  }

  // GAME LOGIC GOES HERE

  gameOver = () => {
    //game fail state
    this.state.CardList.forEach(card => {
      card.clicked=0
    })

    //resetting the score to zero
    this.setState({score: 0})

    //randomizing the cards and starting again
    return this.state.CardList.sort(() => Math.random() - 0.5)
  }


  clickEvent = (id) => {
    console.log("Clicked!")
    this.state.CardList.find((card, i) => {
      if (card.id === id) {
        if(CardList[i].clicked === 0) {
          //we add +1 to the score and also to the relevant ID that has been clicked
          this.setState({score: this.state.score + 1, CardList: CardList[i].clicked + 1})

          //then we shuffle the cards and start another round
          this.state.CardList.sort(() => Math.random() - 0.5)
        
          return true
        } else {
          //if the card has been clicked, this is the game over state and we run the gameOver function
          return this.gameOver()
        }
      }
    return false
    })
  }

  //in our render, we are creating and setting a card for each card in our json file
  render() {
    return (
      <div className="container">
      <div className="row">
        <Nav />
        {this.state.CardList.map(card => (
          <Card 
            key = {card.id}
            id = {card.id}
            img = {card.img}
            clicked = {card.clicked}
            clickEvent = {this.clickEvent}
          />
        ))}
      </div>
      </div>
    );
  }
}

export default App;
