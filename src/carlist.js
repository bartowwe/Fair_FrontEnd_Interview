import React, { Component } from 'react';
import './App.css';

class CarList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicle : props.vehicle,
      favorited : false,
    };
    this.favorite = props.favorite;
    this.checkFavorited = props.favorited;
    this.selectVehicle = props.selectVehicle;
    this.favoriteButton = this.favoriteButton.bind(this);
  }

  //updates props whenever the parent component state values change
  componentWillReceiveProps(nextProps) {
    this.setState({ vehicle: nextProps.vehicle, favorited: nextProps.favorited});  
  }

  //activates and toggles the favorite button
  favoriteButton(){
    if (!this.state.favorited){
      return (<button className="favoriteButton" onClick={() => {this.favorite(this.state.vehicle)}}>Favorite</button>)
    }
    return (<button className="favoriteButton" onClick={() => {this.favorite(this.state.vehicle)}}>Unfavorite</button>)
  }

  render() {
    return (
        <div className="vehicalbox">
            <div>{this.favoriteButton()}</div>
            <div style={{cursor: 'pointer'}} onClick={() => {this.selectVehicle(this.state.vehicle)}}>
              <ul>
                  <li id="description">
                    <img src={this.state.vehicle.chrome_image_url} alt="" id="carpic"></img>
                  </li>
                  <li id="description" style={{textAlign: "left", width: '200px'}}>
                      <div id="info">
                          <div>{this.state.vehicle.model_year} {this.state.vehicle.make} {this.state.vehicle.model}</div>
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
        </div>
    );
  }
}

export default CarList;
