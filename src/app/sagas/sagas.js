import {call, put, takeEvery} from 'redux-saga/effects';
import Api from '../api/Api';
import {SEND_FORM, GET_FORM_DATA_START, SEND_FORM_SUCCEEDED, SEND_FORM_FAILED, GET_FORM_DATA_SUCCEEDED, GET_FORM_DATA_FAILED} from '../constants/actionTypes.constant';

function * sendForm(action) {
  try {
    const user = yield call(Api.sendForm, action.data);
    yield put({type: SEND_FORM_SUCCEEDED, user});
  } catch (e) {
    yield put({type: SEND_FORM_FAILED, message: e.message});
  }
}

function * getFormData() {
  try {
    const user = yield call(Api.getForm);
    console.log(user);
    yield put({type: GET_FORM_DATA_SUCCEEDED, user});
  } catch (e) {
    yield put({type: GET_FORM_DATA_FAILED, message: e.message});
  }
}

function * mainSaga() {
  yield takeEvery(SEND_FORM, sendForm);
  yield takeEvery(GET_FORM_DATA_START, getFormData);
}

export default mainSaga;
