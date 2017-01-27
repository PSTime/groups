import {combineReducers} from 'redux';
import groupsReducer from './groups.reducer';
import formReducer from './form.reducer';

const mainReducer = combineReducers({
  groupsReducer,
  form: formReducer
});

export default mainReducer;
