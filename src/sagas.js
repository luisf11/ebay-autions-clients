
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import {fetchItems} from './api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getItems(action) {
  try {
    // do api call
    // const user = yield call(Api.fetchUser, action.payload.userId);
    const items = yield call(fetchItems);
    yield put(receiveApiData(items));
  } catch (e) {
   console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getItems);
}