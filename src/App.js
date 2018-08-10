import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Navigation from './components/Navigation';
import ContainerPhoto from './components/ContainerPhoto';


class App extends Component {
  render() {
    return (

        <div className="container">

          <Form />
          <Navigation />
          <ContainerPhoto />


        </div>
    );
  }
}

export default App;
