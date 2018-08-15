import React, { Component } from 'react';
import PicPhotos from './PicPhotos';
import axios from 'axios';

class ContainerPhoto2 extends Component{
  constructor(){
    super();
    this.state ={
      pictures : [],
      loading: true
    };
  }
  // get Json and set state properties if returned data
  componentDidMount(){
    // console.log(this.props.term);
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=301cfcb6a090e0736f58694e30674bc8&safe_search=1&tags=${this.props.tag}&per_page=16&format=json&nojsoncallback=1`)

    .then (response => {
       this.setState ({
        pictures: response.data.photos.photo,
        loading: false
       });

    })
    .catch (error => {
      console.log("error");
    })
  }

  render() {
    return (
      // display photos
      <div className="container">
       <h2>{this.props.term} </h2>

        <PicPhotos pictures={this.state.pictures} />
      </div>
    );
  }
}

export default ContainerPhoto2;
