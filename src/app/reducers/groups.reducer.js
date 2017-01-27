import {ADD_CARD, REMOVE_CARD} from '../constants/actionTypes.constant';
import filter from 'lodash/filter';

const initialState = {
  groups: []
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        groups: [...state.groups, {}]
      };
    }
    case REMOVE_CARD: {
      return {
        ...state,
        groups: filter(state.groups, (v, k) => k !== action.index)
      };
    }
    default:
      return state;
  }
};

export default groupsReducer;
