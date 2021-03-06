import React, { Component } from "react";
import { connect } from "react-redux";
import '../App.css';
/*import { Wrapper, Status } from "@googlemaps/react-wrapper";*/
/*import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    LoadScrips,
    Marker,
    InfoWindow
  } from "react-google-maps";*/
//import { Marker } from '@react-google-maps/api';
//import {InfoWindow, Marker, GoogleApiWrapper,Map} from 'google-maps-react';
import { LoadMarket,SetLatMarket,SetLngMarket} from "../stores/market/actions";
import GoogleMapReact from 'google-map-react'
import credentials from "../credentials";
//import Search from "./Search";
import zIndex from "@mui/material/styles/zIndex";
import MarkerC from "./MarkerC";





class Maps extends Component {


    componentDidMount(){
        console.log("componente didmount");

        
    }


    renderMarkers= (map,maps) =>{

        console.log("rendermarker");

        console.log(this.props.lat);
        console.log(this.props.lng);

        //this.props.SetLatMarket(map.center.lat);

        //console.log(map.getCenter());
        
        console.log(maps);



        let marker = new maps.Marker({
            position: { lat: this.props.lat, lng: this.props.lng },
            //position:{position},
            draggable: true,
            map,
            title: this.props.placeSearch
            });

            
            return marker;

    }

    
  


    render(){
        console.log(this.props.loadMarket);

       
        if (this.props.loadMarket===true){


            console.log("if load cierto");

            console.log("lat:",this.props.lat);
            console.log("longitud:",this.props.lng);

            return(             
                    
                    
                <div className="Mapas" /*style={{ height: '70%', width: '100%'}}*/>
                    <GoogleMapReact
                    google={this.props.google}
                    bootstrapURLKeys={{ key: credentials.mapsKey, libraries: ['places', 'geometry']}}
                    center= {{lat: this.props.lat, lng: this.props.lng }}
                    defaultZoom={this.props.Zoom}
                    zIndex={0}
                    
                    yesIWantToUseGoogleMapApiInternals={true}               

                    >
                    <MarkerC title="hola" key={1} 
                    lat={this.props.lat}
                    lng={this.props.lng}/>
                       
                            
                    </GoogleMapReact>
                </div>



           

            )





        }

        else {


            return(             
                    
                    
                <div className="Mapas" /*style={{ height: '70%', width: '100%'}}*/>
                    <GoogleMapReact
                    google={this.props.google}
                    bootstrapURLKeys={{ key: credentials.mapsKey, libraries: ['places', 'geometry']}}
                    center= {{lat: -34.397, lng: 150.644 }}
                    defaultZoom={this.props.Zoom}
                    zIndex={0}
                    
                    
                    >
                            
                    </GoogleMapReact>
                </div>



           

            )


        }

        

       

        
    }

}


const mapStateToProps = (state)=> {
    return{
        loadMarket: state.MarketReducer.loadMarket,
        lat: state.MarketReducer.lat,
        lng: state.MarketReducer.lng,
        zoom: state.MarketReducer.zoom,
        placeSearch: state.MarketReducer.placeSearch,

    };
    
};

const mapDispatchToProps ={

    LoadMarket,
    SetLatMarket,
    SetLngMarket,
};



export default connect(mapStateToProps,mapDispatchToProps)(Maps);