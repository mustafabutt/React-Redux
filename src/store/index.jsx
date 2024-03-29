import { createStore} from "redux";
import {applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {SiteMap} from "./reducers";
//TODO: {M.A} there should be no `any` type
const consoleMessages = (store)=>(next)=>(action)=>{
    let result;
    console.groupCollapsed(`dispatching action => ${action.type}`);
    let state = store.getState();
    console.log(`1 state: ${JSON.stringify(state)}`);
    result = next(action);
    console.log(`2 state: ${JSON.stringify(state)}`);
    console.groupEnd();
    return result;
};

export const storeFactory =  (initialState={})=>{
    return applyMiddleware(thunk,consoleMessages)(createStore)(SiteMap, initialState);
};
