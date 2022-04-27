import React, { Component } from "react";
import { connect } from "react-redux";
import '../App.css';
import pin from "../../pin.png";
import { Link } from "react-router-dom";

import { LoadMarket,SetLatMarket,SetLngMarket} from "../stores/market/actions";

const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)"
  };


class Marker extends Component {

    render(){

        console.log(this.props.lat);
        console.log(this.props.lng);


        return (

            <div className="marker">
                <Link /*to={"/" + item.name}*/ /*key={i.id}*/ lat={this.props.lat} lng={this.props.lng}>
                    <img style={markerStyle} src={pin} alt="pin" />
                </Link>

            </div>



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



export default connect(mapStateToProps,mapDispatchToProps)(Marker);
