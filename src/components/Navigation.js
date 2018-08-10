import React from 'react';
import {
  Route,
  BrowserRouter,
  NavLink } from 'react-router-dom';
import Cats from './Cats';
import Dogs from './Dogs';
import Computers from './Computers';

const Navigation = () => (
  <BrowserRouter>
    <div className="main-nav">
      <ul>
        <li><NavLink to ='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/computers'>Computers</NavLink></li>
      </ul>

      <Route path='/cats' component={Cats} />
      <Route path='/dogs' component={Dogs} />
      <Route path='/computers' component={Computers} />
    </div>
  </BrowserRouter>
);

export default Navigation;
