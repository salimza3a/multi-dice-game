import React from "react";
import {Card} from 'react-bootstrap'
import './main.css';
import Dices from './Dices'
class CardComponent extends React.Component {
    
    render () {
        return (<React.Fragment>
 <Card className="bg-dark w-100" >
      <Card.Header style ={{backgroundColor: "#88B77B" , color: "#f2f2f2"}} className="display-5"> {this.props.gamer}
      <Card.Title className="display-7">Score: {this.props.score}</Card.Title>
      <Card.Title className="display-7">Points: {this.props.points ? this.props.points : ""}</Card.Title>
      </Card.Header>
      
      <Card.Body className="bg-light d-flex  justify-content-evenly">
      <i className={`fa-6x fas fa-dice-${this.props.diceValues === null ? this.props.staticDice : Dices[this.props.diceValues[0]] } dice-color ${this.props.shakingDice && "shakingDices"}`}></i>
      <i className={`fa-6x fas fa-dice-${this.props.diceValues === null ? this.props.staticDice:  Dices[this.props.diceValues[1]]} dice-color ${this.props.shakingDice && "shakingDices"}`}></i>
      </Card.Body>
    </Card>
        </React.Fragment>)
    }
}
CardComponent.defaultProps = {
    staticDice: "one",
    secondDice: "two"
    
}


export default CardComponent