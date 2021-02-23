import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import manageGame from './reducers/manageGame'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore(manageGame)


ReactDOM.render(
<Provider store={store}>
    
<App/>

</Provider>, 
document.getElementById("root")
);

