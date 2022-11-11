import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const store = createStore( Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  //provider , store as a prop so that we can access anywhere in the app
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

