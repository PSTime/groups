import {combineReducers} from 'redux';
import groupsReducer from './tables.reducer';

const mainReducer = combineReducers({
  groupsReducer
});

export default mainReducer;
