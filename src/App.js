import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { doTheThing } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.props.onClick}>Click me</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  foo: state.foo,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(doTheThing()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
