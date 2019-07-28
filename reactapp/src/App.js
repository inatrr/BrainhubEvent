import React, { Component } from 'react';
import './App.css';
import Form from './components/FormComponent'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sign up for to event</h2>
        </div>
        <div className='Event--form'>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
