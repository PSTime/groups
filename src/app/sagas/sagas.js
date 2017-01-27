// import {call, put, takeEvery, take, cancelled} from 'redux-saga/effects';
// import Api from '../api/Api';
//
// /*
//   create chanel for get data
//  */
// function * fetchTables() {
//   const chanel = yield call(Api.getTables);
//   try {
//     let haveTables = true;
//     while (haveTables) {
//       const tables = yield take(chanel);
//       yield put({type: GET_TABLES_SUCCEEDED, tables});
//       haveTables = Boolean(tables);
//     }
//   } finally {
//     if (yield cancelled()) {
//       chanel.close();
//     }
//   }
// }

function * mainSaga() {
  // yield takeEvery(GET_TABLES, fetchTables);
}

export default mainSaga;
