import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Planet from './components/Planet/Planet'

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      population: 0,
      count: 0
    }

    this.inc = this.inc.bind(this);
  }

  inc() {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentWillMount() {
    axios.get('http://swapi.co/api/planets/1/')
    .then(response => {
      console.log(response);
      this.setState({
        name: response.data.name,
        population: response.data.population
      }, ()=> console.log(this.state))
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Death Star</h2>
          <Planet
            name={this.state.name}
            population={this.state.population}
            count={this.state.count}
            fn={this.inc}
            />
        </div>
      </div>
    );
  }
}

export default App;
