import React, { Component } from "react";
import { connect } from "react-redux";
/*import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import credentials from "../credentials";*/
import { LoadMarket,SetLatMarket,SetLngMarket,SetPlace, SetPlaceId} from "../stores/market/actions";
//import { LoadMarket } from "../stores/market/actions";
//import { TextField } from "@mui/material";
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

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  text-align:center;
`;

/*const searchOptions = {
    location: new this.props.google.maps.LatLng(-34, 151),
    radius: 2000,
    types: ['address']
  }*/
class Searchtext extends Component {


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



        /*return (
          <GooglePlacesAutocomplete
           apiKey="AIzaSyBWFXa1kP2tnUlZErfCJ5jOMsUgJkVj9Lc"
           />
        );*/

          
        return(
          <div className="Search">
              <Autocomplete 
              style={{
                width: '100%',
                height: '40px',
                paddingLeft: '16px',
                marginTop: '2px',
                //marginBottom: '100px'
               }}
               /*options = {
                fields= ["address_components", "geometry", "icon", "name"]
    
              }*/
               onPlaceSelected={ this.onPlaceSelected }
               types={['(regions)']}
              />

              
            </div>
        )
            }


   

    /*render() {
        const autoComplete = this.Autocomplete;
        console.log(searchOptions);
        return (
            <div className="modalSearch">
                <TextField                
                id="outlined-basic"
                variant="outlined"
                fullWidth
                label="Search"
                >

                </TextField>
            </div>
        );
    }*/

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