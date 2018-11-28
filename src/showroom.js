import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class ShowRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id : props.id,
      vehicle : {},
      imageNum : 0,
      image : '',
      favorited : false,
    };
    this.favorite = props.favorite;
    this.checkFavorited = props.favorited;
    this.fetch = this.fetch.bind(this);
    this.imageGal = this.imageGal.bind(this);
    this.favoriteButton = this.favoriteButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //selectively updates props from parent after checking if selected vehicle has changed
    if (this.state.id !== nextProps.id)
    {
      this.setState({ id: nextProps.id, favorites: nextProps.favorites, imageNum: 0, image: '', favorited: this.checkFavorited()})  
      this.fetch(nextProps.id)
    }
    else
    {
      this.setState({ favorites: nextProps.favorites, favorited: this.checkFavorited()})  
    }

  }

  //fetches the individual vehicle to be displayed
  fetch(id){
    axios.get(`https://private-4e19e-interviewapi3.apiary-mock.com/vehicles/` + id)
      .then(data => {
        let v = data.data.data.vehicle;
        this.setState({vehicle : v, image: v.image_location_list[0]});
      })
      .catch(res => {
        if(res instanceof Error) {
          this.setState({vehicle : {err:'err'}})
          console.log("Error is: ", res.message);
        } else {
          console.log("Other error: ", res.data);
        }
      });
  }

  //Moves forward or backward through the image gallery depending the the direction of the arrow clicked. Loops at end.
  imageGal(num){
    let img = this.state.imageNum + num;
    if (img < 0)
    {
      img = this.state.vehicle.image_location_list.length - 1;
    }
    else if (img > this.state.vehicle.image_location_list.length - 1)
    {
      img = 0;
    }
    this.setState({imageNum: img, image: this.state.vehicle.image_location_list[img]});
  }

  //updates and handles clicking on the favorite button
  favoriteButton(){
    if (!this.state.favorited){
      return (<button className="favoriteButton" onClick={(e) => {this.favorite(this.state.vehicle); e.preventDefault()}}>Favorite</button>)
    }
    return (<button className="favoriteButton" onClick={(e) => {this.favorite(this.state.vehicle); e.preventDefault();}}>Unfavorite</button>)
  }

  //Checks the selected vehicle to determine 
  //  a. no vehicle is selected
  //  b. invalid endpoint (api error)
  //  c. valid endpoint
  //and renders the page if it's valid
  checkVehicle() {
    if (Object.keys(this.state.vehicle).length === 0)
    {
      return (<div>No Car is selected</div>)
    }
    else if (Object.keys(this.state.vehicle).length === 1)
    {
      return (<div>There was an error retrieving car info</div>)
    }
    else 
    {
      return  (
        <div style={{paddingRight: '40px'}}>
          <ul > 
            <li id="description" onClick={() => {this.imageGal(-1)}}><i className="arrow left"></i></li>
            <li id="description"><img src={this.state.image} alt='' style={{width: '500px', 'borderRadius':'10px'}} onError={() => { this.setState({image : 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png'}) }}/></li>
            <li id="description" onClick={() => {this.imageGal(1)}}> <i className="arrow right"></i></li>
            <div> ({this.state.imageNum + 1}/{this.state.vehicle.image_location_list.length})</div>
          </ul>
          <div id="showroomText">
            <div id="showroomHeader">{this.state.vehicle.model_year} {this.state.vehicle.make} {this.state.vehicle.model}</div>
            <div className="vehicalbox">
              <ul>
                <li id="description" style={{textAlign: "left", width: '200px'}}>
                    <div id="price">
                        <div>Trim: {this.state.vehicle.trim}</div>
                        <div>Miles: {this.state.vehicle.mileage}</div>
                    </div>
                </li>
                <li id="description" style={{textAlign: "left"}}>
                  <div id="price">
                        <div>Start Fee: <span style={{color: '#FF651B'}}>{this.state.vehicle.product_financials[0].start_fee_cents / 100}</span></div>
                        <div>Monthly Fee: <span style={{color: '#FF651B'}}>{this.state.vehicle.product_financials[0].monthly_payment_cents / 100}</span></div>
                  </div>
                </li>
              </ul>
            </div>
            {this.favoriteButton()}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
        <div id='showroomsub'>
            {this.checkVehicle()}
        </div>
    );
  }
}

export default ShowRoom;
