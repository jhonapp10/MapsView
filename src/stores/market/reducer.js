import * as Actions from "../../actions/actions";
const initialState = {
    loadMarket: false,
    placeSearch : "",
    lng : 151,
    lat: -34,
    search: false,
    zoom : 5,
    center:[],
    places:[],


};

function MarketReducer(state = initialState, action){

    switch (action.type){
        case Actions.LOADMARKET:
            return {
                ...state,
                loadMarket: action.loadMarket,


            };

        case Actions.SETLATMARKET:
            return {
                ...state,
                lat: action.lat,


            };
        case Actions.SETLNGMARKET:
            return{
                ...state,
                lng: action.lng,
            };
        
        case Actions.SETZOOM:
            return{
                ...state,
                zoom: action.zoom,
            }

        case Actions.SETPLACE:
            return {
                ...state,
                places: action.places,
            }

        case Actions.SETPLACEID:
            return{
                ...state,
                placeSearch: action.placeSearch,
            }

        default:
            return  state;

        
        
    }


}

export default MarketReducer;