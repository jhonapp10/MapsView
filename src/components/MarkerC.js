import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';
//import pin from "../../pin.png";

import {Marker} from "react-google-maps";

import { LoadMarket,SetLatMarket,SetLngMarket} from "../stores/market/actions";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";




class MarkerC extends Component {



    render(){

        


        return (

            <Marker>
                <FontAwesomeIcon icon={faLocationDot} size="2x" color="red"/>
                <span id="spanMarker">{this.props.placeSearch}</span>
                
            </Marker>



        );

    
    
    
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



export default connect(mapStateToProps,mapDispatchToProps)(MarkerC);
