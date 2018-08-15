import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  return(
    <div className="main-nav">
      <ul>
        <li><NavLink to ='/search/space'>Space</NavLink></li>
        <li><NavLink to='/search/mountain'>Mountain</NavLink></li>
        <li><NavLink to='/search/matrix'>Matrix</NavLink></li>
      </ul>
    </div>
  );
}

export default Navigation;
