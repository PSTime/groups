import {normalizeServerResponse} from '../actions/groups.action';
import {SEND_FORM, GET_FORM_DATA_START, SEND_FORM_SUCCEEDED, SEND_FORM_FAILED, GET_FORM_DATA_SUCCEEDED, GET_FORM_DATA_FAILED} from '../constants/actionTypes.constant';

const initialState = {
  loading: false,
  initialValues: null
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_FORM: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_FORM_DATA_START: {
      return {
        ...state,
        loading: true
      };
    }
    case SEND_FORM_SUCCEEDED:
      return {
        ...state,
        loading: false
      };
    case SEND_FORM_FAILED:
      return {
        ...state,
        loading: false
      };
    case GET_FORM_DATA_SUCCEEDED:
      return {
        ...state,
        loading: false,
        initialValues: normalizeServerResponse(action.data)
      };
    case GET_FORM_DATA_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default groupsReducer;
