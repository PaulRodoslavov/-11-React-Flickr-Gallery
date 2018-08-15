import React from 'react';
import axios from 'axios';
import ApiKey from './Config';
import PicPhotos from './PicPhotos';




export default class ContainerPhoto extends React.Component  {

  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: true
    };
  }

  componentDidMount(){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${this.props.tag}&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.loading){
      return (
        <div className ="container">
        <h2>Loading... </h2>
        </div>
      )
    }
    if(this.state.pictures.length ===0){
      return(
      <div className ="container">
        <h2>No Results Found </h2>
        <p>Unfortunately there are no matches</p>
      </div>
      )
    }
    return (
      <div className="container">
       <h2>{this.props.tag} </h2>
        <PicPhotos pictures={this.state.pictures} />
      </div>
    );
  }
}
