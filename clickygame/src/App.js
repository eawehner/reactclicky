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
    console.log("Game over");
    //game fail state
    this.state.CardList.forEach(card => {
      card.clicked=0
    })

    //resetting the score to zero
    this.setState({score: 0})

    //randomizing the cards and starting again
    return;
  }


  clickEvent = (event) => {
    event.preventDefault();

    let currentId = event.target.id;
    console.log("Clicked!")
    console.log(currentId);

    if (!this.state.CardList[currentId].clicked) {
      console.log("It has not been clicked!:" + this.state.CardList[currentId].clicked);

      let tempArray = this.state.CardList.slice();
      tempArray[currentId].clicked = 1;

      console.log(tempArray);

      this.setState({score: this.state.score + 1, CardList: tempArray});
    
    } else {
      console.log("It's been clicked!: " + this.state.CardList[currentId].clicked);
      this.gameOver();
    }
  }

  //in our render, we are creating and setting a card for each card in our json file
  render() {
    return (
      <div className="container">
      <Nav 
        score = {this.state.score}
      />
      <div className="row">
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
