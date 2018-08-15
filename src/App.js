import React, { Component } from 'react';
import {
  Route,
  BrowserRouter,
  Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ContainerPhoto from './components/ContainerPhoto';



class App extends Component {

render() {
  return (
  <BrowserRouter forceRefresh={true}>
    <div className="container">
    <Route path ="/" component={Header} />
    <Switch>
      <Route path ="/search/:tag" render={ props => <ContainerPhoto tag={ props.match.params.tag }/> } />
      <Route exact path ="/" render={ props => <ContainerPhoto tag='Ukraine Odessa'/> } />
      <Route component={NotFound}/>
    </Switch>
    </div>

  </BrowserRouter>
  );
}
}

export default App;
