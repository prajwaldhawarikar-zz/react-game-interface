import React, { Component } from 'react';
import Stars from './Stars';
import Answer from './Answer';
import Button from './Button';
import Numbers from './Numbers';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <h3>Play Nine Game</h3>
                <hr/>
                <div className="row">
                    <Stars />
                    <Button/>
                    <Answer/>
                </div>
                <br/>
                <Numbers/>
            </div>
        );
    }
}
 
export default Game;
