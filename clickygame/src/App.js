import React, { Component } from 'react';
import './App.css';
import CardList from "./cards.json";
import Card from "./components/Card";
import Nav from "./components/Nav";

class App extends Component {

  //the state where we will track our cards, score and high score
  state = {
    CardList,
    score: 0,
    highScore: 0
  }

  //shuffled array code from: https://www.jstips.co/en/javascript/shuffle-an-array/
  //it loops through the array and shuffles each object within it
  shuffled = (array) => {
    var i, j, temp;

    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    console.log(array);

    return array;
  }

  // GAME LOGIC GOES HERE

  //game fail state
  gameOver = () => {
    console.log("Game over");

    //resetting the 'clicked' property to false for new game, since nothing has been clicked for it!
    this.state.CardList.forEach(card => {
      card.clicked=0;
    })

    //resetting the score to zero
    this.setState({score: 0});

    //and starting again
    return;
  }


  clickEvent = (event) => {
    event.preventDefault();

    //pulling the current ID from the clicked card
    let currentId = event.target.id;
    console.log("Clicked!")
    console.log(currentId);

    //checking to see if the card has been clicked before or not
    if (!this.state.CardList[currentId].clicked) {
      console.log("It has not been clicked!:" + this.state.CardList[currentId].clicked);

      let tempArray = this.state.CardList.slice();
      tempArray[currentId].clicked = 1;

      console.log(tempArray);

      this.setState({score: this.state.score + 1, CardList: this.shuffled(tempArray)});

    
    } else {
      console.log("It's been clicked!: " + this.state.CardList[currentId].clicked);

      if (this.state.score >= this.state.highScore) {
        this.setState({highScore: this.state.score});
      }

      this.gameOver();
    }
  }

  //in our render, we are creating and setting a card for each card in our json file
  render() {
    return (
      <div className="container">
      <Nav 
        score = {this.state.score}
        highScore = {this.state.highScore}
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
