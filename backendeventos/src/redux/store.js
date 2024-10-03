import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { eventoReducer } from './reducers/eventoReducer';

const rootReducer = combineReducers({
    eventoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
