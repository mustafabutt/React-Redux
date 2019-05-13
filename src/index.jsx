import * as React from 'react';
import "./styles/main.scss";
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {storeFactory} from "./store/index";
import {Routes} from './routes';
import sampleState from  "./constants/initialState";
const store = (storeFactory(sampleState));
window.React = React;
window.store = store;

render(
    <Provider store={store}>
        <Routes/>
    </Provider>
    ,document.getElementById("react-container")
);
