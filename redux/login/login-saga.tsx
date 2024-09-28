import { call, put, takeEvery, all } from 'redux-saga/effects';
import loginTypesActions from './login-types';
import { loginAPICall } from './login-services';
import { loginSuccess, loginFailure } from './login-actions';
import { encodeJson } from '../general/jwt';

// Simulate an API call


// Worker Saga: will be fired on FETCH_USER_REQUEST actions
function* loginAPIStart({ payload }: any): Generator<any, void, any>  {
  try {
    const encodeData = encodeJson(payload, 'LOGIN');
    const responseData = yield call(loginAPICall, encodeData);
    if (responseData.data.statusCode === '100') {
      yield put(loginFailure(responseData.data));
    } else {
      yield put(loginSuccess(responseData.data));
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

// Watcher Saga: watches for actions dispatched to the store, starts worker saga
export function* onLoginStart() {
  yield takeEvery(loginTypesActions.LOGIN_START, loginAPIStart);
}

export function* loginSaga() {
    yield all([
      call(onLoginStart),
    ]);
  }