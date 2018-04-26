import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
/*
  *Description: Increment a number on button click
*/
//Constructor method, to use "this"

constructor(){
  //always define super()
  super();

  this.state = { //set count state
    count:0
  }
}
increment = () => { //increment function
  this.setState({
    count:this.state.count + 1 //add 1 when function invoked
  });
}
render(){ //render the Component
  return <div>
            <button onClick={this.increment}>Increment</button>
            {this.state.count}
        </div>
}
} //App

export default App;
