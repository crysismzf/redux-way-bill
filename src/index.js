import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import info from './reducers/info';



// Создаем store
const store = createStore(info, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

