import React, { Component } from "react";
import { connect } from "react-redux";

import { LoadMarket,SetLatMarket,SetLngMarket,SetPlace, SetPlaceId} from "../stores/market/actions";

import Autocomplete from 'react-google-autocomplete';
import TextField from "@mui/material/TextField";

import styled from 'styled-components';
import { Map } from "google-maps-react";
import PlacesAutocomplete from 'react-places-autocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
import Maps from "./Maps";


/*const searchOptions = {
    location: new this.props.google.maps.LatLng(-34, 151),
    radius: 2000,
    types: ['address']
  }*/
class Searchtext extends Component {

    ChangeAuto = (place) =>{

      console.log("change", place);

      
    }


    onPlaceSelected = ( place ) => {
      console.log("cambio");

      console.log(place.formatted_address);

      console.log(place.geometry.location);

      this.props.LoadMarket(true);

      this.props.SetPlaceId(place.formatted_address);



      this.props.SetPlace(place.geometry.location);


      this.props.SetLatMarket(place.geometry.location.lat());

      this.props.SetLngMarket(place.geometry.location.lng());



        
        
        // Set these values in the state.
        
      };
        render(){


          
        return(
          <div className="Search">
              <Autocomplete 
              style={{
                width: '55%',
                height: '25px',
                paddingLeft: '16px',
                marginTop: '2px',
               }}

              //onChange={this.ChangeAuto}
            
              
               onPlaceSelected={ this.onPlaceSelected }
               
               types={['(regions)']}
               placeholder="Search Places"
              />

              
            </div>
        )
            }


   

   

}

const mapStateToProps = (state)=> {
    return {

        loadMarket: state.MarketReducer.loadMarket,
        lat: state.MarketReducer.lat,
        lng: state.MarketReducer.lng,
    


    };

    

};

const mapDispatchToProps ={

    LoadMarket,
    SetLatMarket,
    SetLngMarket,
    SetPlace,
    SetPlaceId,


};



export default connect(mapStateToProps,mapDispatchToProps)(Searchtext);