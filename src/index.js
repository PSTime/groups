import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import mainReducer from './app/reducers/';
import mainSaga from './app/sagas/sagas';
import Form from './app/components/Form.component';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainSaga);

ReactDOM.render(
  <Provider store={store}>
    <Form/>
  </Provider>,
  document.getElementById('root')
);
