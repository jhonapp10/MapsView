import { createStore, combineReducers } from 'redux';
import MarketReducer from './market/reducer';

const reducers = combineReducers({
    MarketReducer,

    
});

const store = createStore(reducers);

export default store;
