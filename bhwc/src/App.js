import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/FormComponent'


class App extends Component {

  state = {
    // apiResponse: '',
    // post: 'qweqweqw',
    // responseToPost: ''
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {/* {this.state.apiResponse} */}

        </p>
        <p className="App-intro">
          {/* {this.state.responseToPost} */}

        </p>
        <div className='Event--form'>

          <Form />
        </div>
      </div>
    );
  }
}

export default App;
