import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import managePregame from './reducers/managePregame'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(managePregame)

// test
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById("root")
);

