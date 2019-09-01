import React, { Component } from 'react';
import Header from './components/header/header';
import Aux from './hoc/Auxx/Aux';
import './App.css';

class App extends Component {

  state = {
    response: null
  }

  componentDidMount() {
    fetch(`http://localhost:1337/emoji-shop`)
      .then(response => response.json())
      .then(data => this.setState(data.emoji));
  }

  render() {
    return (
      <Aux>
        <Header />
        <div className="list">
          <p>{this.state.response}</p>
        </div>
      </Aux >
    );
  }
}

export default App;