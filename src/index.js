import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import mainReducer from './app/reducers/';
import mainSaga from './app/sagas/sagas';
import App from './app/containers/App.container';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
