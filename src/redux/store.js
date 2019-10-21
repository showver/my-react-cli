import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter  from 'reducers/counter';
import userInfo  from 'reducers/userInfo';
import {combineReducers} from "redux";

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
// let store = createStore(counter);
// let store = createStore(combineReducers({counter, userInfo}));
// let store = createStore(combineReducers({counter, userInfo}), applyMiddleware(thunkMiddleware));
let store = createStore(combineReducers({counter, userInfo}), enhancer);

export default store;
