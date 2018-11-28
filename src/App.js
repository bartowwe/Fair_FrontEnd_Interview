import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CarList from './carlist';
import ShowRoom from './showroom';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles : [],
      showVehicles : [],
      activePage : 1,
      perPage : 3,
      pageNums : 1,
      selected : '',
      favorites : [],
      viewState : 'results',
    };
    this.fetch = this.fetch.bind(this);
    this.presetFavs = this.presetFavs.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.renderVehicles = this.renderVehicles.bind(this);
    this.paginate = this.paginate.bind(this);
    this.selectVehicle = this.selectVehicle.bind(this);
    this.checkFavorited = this.checkFavorited.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  //on mount retrieve the stubbed search results and the locally stored favorites
  componentDidMount() {
    this.fetch();
    this.presetFavs();

  }

  //when the component updates, resave the favorites to local storage
  componentDidUpdate() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
  }

  //helper function to get favorites from local storage and save them
  presetFavs() {
    let tempFavs = [];
    let data = JSON.parse(localStorage.getItem('favorites'));
    for (let i = 0; i < Object.keys(data).length; i++)
    {
      tempFavs.push(data[i])
    }
    this.setState({favorites: tempFavs});
  }

  //fetch stubbed info from api
  fetch(){
    axios.get('https://private-4e19e-interviewapi3.apiary-mock.com/vehicles?page=1')
      .then(data => {
        let v = []
        for (var i = 0; i < Object.keys(data.data.data.vehicles).length; i++){
          v.push(data.data.data.vehicles[Object.keys(data.data.data.vehicles)[i]]);
        }
        let tempV = [];
        for (let i = 0; i < this.state.perPage; i++)
        {
          tempV.push(v[i])
        }
        this.setState({vehicles : v, showVehicles : tempV, pageNums : Math.ceil(v.length/ this.state.perPage)});
        
        // console.log(v, this.state.pageNums)
      })
      .catch(res => {
        if(res instanceof Error) {
          console.log("Error is: ", res.message);
        } else {
          console.log("Other error: ", res.data);
        }
      });
  }

  //pagination helper function, determines the number of pages that show up on screen and which one is selected
  paginate(){
    let pages = []
    // Outer loop to create parent
    for (let i = 1; i <= this.state.pageNums; i++) {
      if (i === this.state.activePage){
        pages.push(<li key={i} className="paginateNumsSelected" onClick={() => {this.handlePageChange(i)}}>{i}</li>)
      }
      else{
        pages.push(<li key={i} className="paginateNums" onClick={() => {this.handlePageChange(i)}}>{i}</li>)
      }
    }
    return pages

  }

  //handles the actual page change
  handlePageChange(i, vs){
    let pageNumber = i;
    let tempV = [];
    let viewState = vs || this.state.viewState;

    //differenciate between results and favorites tab
    if (viewState === "results"){
      for (let i = ((pageNumber - 1)* this.state.perPage); i < ((pageNumber - 1)*this.state.perPage + this.state.perPage); i++)
      {
        if (this.state.vehicles[i] !== undefined)
          {tempV.push(this.state.vehicles[i])}
      }
    }
    else {
      for (let i = ((pageNumber - 1)* this.state.perPage); i < ((pageNumber - 1)*this.state.perPage + this.state.perPage); i++)
      {
        if (this.state.favorites[i] !== undefined)
          {tempV.push(this.state.favorites[i])}
      }
    }
    // console.log(`active page is ${pageNumber}`, tempV);
    this.setState({activePage: pageNumber, showVehicles: tempV});


  }

  //renders the showVehicals (which is the total results or the favorites depending on the tab)
  renderVehicles(){
    return(
      <div>
        {this.state.showVehicles.map((vehicle, index) => {
          let favorited = false;
          for(let i = 0; i < this.state.favorites.length; i++)
          {
            if (this.state.favorites[i].id === vehicle.id){favorited = true}
          }
          return <li key={index}> <CarList vehicle={vehicle} favorited={favorited} favorite={this.handleFavorite} selectVehicle={this.selectVehicle}/> </li>;
        })}
      </div>
    )
  }

  //changes the selected vehicle in the state
  selectVehicle(vehicle) {
    this.setState({selected: vehicle.id})
  }

  //favorites or unfavorites a vehical depending on whether or not it's already in your favorites
  handleFavorite(vehicle){
    let tempFavs = this.state.favorites;
    for(let i = 0; i < this.state.favorites.length; i++)
    {
      if (this.state.favorites[i].id === vehicle.id)
        {
          tempFavs.splice(i,1);
          this.setState({favorites: tempFavs});
          return;
        }
    }
    tempFavs.push(vehicle);
    this.setState({favorites: tempFavs});
  }

  //checks if the selected vehicle is favorited
  checkFavorited() {
    for(let i = 0; i < this.state.favorites.length; i++)
    {
      if (this.state.favorites[i].id === this.state.selected)
        {
          return true
        }
    }
    return false
  }

  //controls the tab at the top of the left vehical results with 'Results Favorites' and highlights the appropriate one
  vlistHeader() {
    if (this.state.viewState === "results"){
      return (<ul className="tabs">
        <li className="paginateNumsSelected">Results</li>
        <li className="paginateNums" onClick={() => {this.setState({viewState: 'favorites', pageNums : Math.ceil(this.state.favorites.length/ this.state.perPage)}); this.handlePageChange(1, 'favorites')}}>Favorites</li>
      </ul>)
    }
    else {
      return (<ul className="tabs">
        <li className="paginateNums" onClick={() => {this.setState({viewState: 'results', pageNums : Math.ceil(this.state.vehicles.length/ this.state.perPage)}); this.handlePageChange(1, 'results')}}>Results</li>
        <li className="paginateNumsSelected">Favorites</li>
      </ul>)
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div className="App-logo" alt="logo">fair</div>
        </header>
        <div id="parentbox">
          <table style={{margin: 'auto'}}>
            <tbody>
              <tr >
                <td id="carlist">
                  <div id="vlistHeader">
                    {this.vlistHeader()}
                  </div>
                  <ul id="vlist">
                    {this.renderVehicles()}
                  </ul>
                  <div className="paginate" style={{width: '150px'}}>
                      {this.paginate()}
                  </div>
                </td>
                <td id="showroom">
                    <ShowRoom id={this.state.selected} favorited={this.checkFavorited} favorite={this.handleFavorite}></ShowRoom>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
