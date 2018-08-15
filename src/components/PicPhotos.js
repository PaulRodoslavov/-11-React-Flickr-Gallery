import React from 'react';
import Photo from './Photo';

const PicPhotos = props => {
  const results = props.pictures;
  let picked = results.map(data =>
    <Photo key={data.id} alt={data.title} url={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} />)
  return(
    <div className="photo-container">
      <ul>
      {picked}
      </ul>
    </div>
  );
}
export default PicPhotos;
