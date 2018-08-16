import React from 'react';

// returns photo with url and alt
const Photo = props => {
  return(
      <li>
        <img src={props.url} alt={props.alt} />
      </li>
  );
}
export default Photo;
