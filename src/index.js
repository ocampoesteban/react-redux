import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducers/tiendaReducer'
const store=createStore(reducer);


ReactDOM.render(
  
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  
  
  </BrowserRouter>
  
  , document.getElementById("root"));
