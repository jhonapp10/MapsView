import marketReducer from "../../stores/market/reducer";
import { SetLatMarket, SetLngMarket } from "../../stores/market/actions";
import Actions from "../../actions/actions";
import cloneDeep from 'lodash/cloneDeep';


//const { default: MarketReducer } = require("../../stores/market/reducer");


describe('Marker - Reducer ', ()=>{

    let initstate;

    beforeEach(()=>{

        initstate ={
            loadMarket: false,
            placeSearch : "",
            lng : 151,
            lat: -34,
            search: false,
            zoom : 5,
            center:[],
            places:[],


        };


    });

    describe('Actions', () =>{
        it('Return init state', ()=>{
            const actual = marketReducer(initstate, {});
            const esperado = initstate;

            expect(actual).toEqual(esperado);
        });

        it(`${Actions.SETLATMARKET} return LatState`, ()=>{

            const mockState= cloneDeep(initstate);
            const lat = 22 ;
            mockState.lat = lat;

            const actual = marketReducer(initstate, SetLatMarket(lat));
            const esperado = mockState;

            expect(actual).toEqual(esperado);

        });

        it(`${Actions.SETLNGMARKET} return LngState`, ()=>{

            const mockState = cloneDeep(initstate);
            const lng = 32;

            mockState.lng = lng;

            const actual = marketReducer(initstate,SetLngMarket(lng));
            const esperado = mockState;

            expect(actual).toEqual(esperado);
            

        });

    })
})