import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Button} from 'react-bootstrap';
import CardComponent from "./CardComponent";
import './main.css';
import Dices from './Dices'
class  App extends React.Component {
  constructor() {
    super() 
    this.state = {
      player1: null,
      player2: null,
      player1Point: null,
      player2Point: null,
      player1Score: 0,
      player2Score: 0,
      buttonShaking: false,
    }
    this.generateValues = this.generateValues.bind(this)
  }
  generateValues() {
   const firstRandomArr = [];
   const secondRandomArr = [];
   while(firstRandomArr.length < 2) {
    firstRandomArr.push(Math.floor(Math.random() * Dices.length))
    secondRandomArr.push(Math.floor(Math.random() * Dices.length)) 
  }
  const firstPlayerPoint = firstRandomArr.reduce((a,b) => a + b,2);
  const secondPlayerPoint = secondRandomArr.reduce((a,b) => a + b,2);
  
  if(firstPlayerPoint > secondPlayerPoint) {
    this.setState({player1Score: this.state.player1Score + 1})
  } else {
    this.setState({player2Score: this.state.player2Score + 1})
  }


   this.setState({player1: firstRandomArr, player2: secondRandomArr, player1Point:firstPlayerPoint , player2Point: secondPlayerPoint , buttonShaking: true })

   setTimeout(() => {
    this.setState({buttonShaking: false})
   }, 1123);

  }
  
  render () {
    console.log(this.state.player1Score)
    return (

      <div >
  <Container>
      <Card className='text-center' style={{ width: '100%', backgroundColor: "#88B77B", color: "#f2f2f2" }} >
        <Card.Title className='display-6'>DICE GAME</Card.Title>
        <Card.Text>
          DICE GAME
        </Card.Text>
        <div className='d-flex justify-content-center'>
        <Button disabled = {this.state.buttonShaking ? true : false} onClick={this.generateValues} variant="light" className="text-dark  ">{this.state.buttonShaking ? "Rolling" : "Go Roll"}</Button>

        </div>
        <Card.Body >
          <div className="card-component">
            <CardComponent   diceValues= {this.state.player1} points = {this.state.player1Point} score = {this.state.player1Score} shakingDice = {this.state.buttonShaking} gamer = "Player 1"  />
            <CardComponent  diceValues= {this.state.player2} points = {this.state.player2Point} score = {this.state.player2Score}  shakingDice = {this.state.buttonShaking} gamer = "Player 2"  />
          </div>
        </Card.Body>
      </Card>
    </Container>
      </div>
    );
  }
  
}

export default App;
