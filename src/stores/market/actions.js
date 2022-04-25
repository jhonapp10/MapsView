import * as Actions from "../../actions/actions";

export const LoadMarket = (market) => {

    console.log("load");
    console.log(market);
    return {
        type: Actions.LOADMARKET ,
        loadMarket: market,
    };
};

export const SetLatMarket = (lat) => {
    console.log("SetLat");
    console.log(lat);
    return{
        type: Actions.SETLATMARKET,
        lat: lat,
    }
};

export const SetLngMarket = (lng) =>{
    console.log("SetLng");
    console.log(lng);
    return{
        type: Actions.SETLNGMARKET,
        lng:lng,
    }
};

export const SetZoom = (zoom) =>{
    return {
        type: Actions.SETZOOM,
        zoom : zoom,
    }
};

export const SetPlace = (place) =>{
    return {
        type: Actions.SETPLACE,
        places: place,
    }
};

export const SetPlaceId = (id) =>{
    return{
        type: Actions.SETPLACEID,
        placeSearch: id,
    }
}
