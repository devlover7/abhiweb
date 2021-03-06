import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount()
  {
    console.log("helloworld");
  }
  handleClick = () => {
    axios.get(`https://worldtimeapi.org/api/timezone/asia/kolkata`)
    .then(res => {
      console.log('this is:',res.data.datetime);
    })
   

    this.setState(
      {
      loading: false
    });

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleClick}>
        Click me
      </button>
        </header>
      </div>
    );
  }
  
    
  

  
}

export default App;
