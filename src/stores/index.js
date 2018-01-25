import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/index';
import { logger } from "./logger";

const middlewares = [];
middlewares.push(thunk);

//logger必需是最后一个push进middlewares中的.
if(process.env.NODE_ENV === "development"){
    //middlewares.push(logger);
}

export default function (initialState) {
    const enhancer=compose(
            applyMiddleware(...middlewares),  
            window.devToolsExtension? window.devToolsExtension():f=>f);
    return createStore(combineReducers, initialState, enhancer);
}   
