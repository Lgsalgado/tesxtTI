// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import eventoReducer from './eventoReducer'; // Asegúrate de tener un reducer de eventos

const rootReducer = combineReducers({
    eventos: eventoReducer, //reducers según los necesites
});

export default rootReducer;
