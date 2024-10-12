import { call, put, takeEvery, all } from 'redux-saga/effects';
import signUpTypesActions from './signUp-types';
import { signUpAPICall, signUpOTPAPICall, signUpAVNAPICall } from './signUp-services';
import { SignUpSuccess, SignUpFailure, SignUpOTPSuccess, SignUpOTPFailure, SignUpAVNSuccess, SignUpAVNFailure } from './signUp-actions';
import { encodeJson } from '../general/jwt';

function* signUpAPIStart({ payload }: any): Generator<any, void, any>  {
  try {
    const encodeData = encodeJson(payload, 'SIGNUP');
    console.log('encodeDATe', encodeData);
    const responseData = yield call(signUpAPICall, encodeData);
    if (responseData.data.statusCode === '100') {
      yield put(SignUpFailure(responseData.data));
    } else {
      yield put(SignUpSuccess(responseData.data));
    }
  } catch (error) {
    yield put(SignUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeEvery(signUpTypesActions.SIGNUP_START, signUpAPIStart);
}

function* signUpOTPAPIStart({ payload }: any): Generator<any, void, any>  {
  try {
    const encodeData = encodeJson(payload, 'SIGNUPOTP');
    console.log('encodeDATe', encodeData);
    const responseData = yield call(signUpOTPAPICall, encodeData);
    if (responseData.data.statusCode === '100') {
      yield put(SignUpOTPFailure(responseData.data));
    } else {
      yield put(SignUpOTPSuccess(responseData.data));
    }
  } catch (error) {
    yield put(SignUpOTPFailure(error));
  }
}

export function* onSignUpOTPStart() {
  yield takeEvery(signUpTypesActions.SIGNUP_OTP_START, signUpOTPAPIStart);
}

function* signUpAVNAPIStart({ payload }: any): Generator<any, void, any>  {
  try {
    const encodeData = encodeJson(payload, 'SIGNUPAVN');
    console.log('encodeDATe', encodeData);
    const responseData = yield call(signUpAVNAPICall, encodeData);
    if (responseData.data.statusCode === '100') {
      yield put(SignUpAVNFailure(responseData.data));
    } else {
      yield put(SignUpAVNSuccess(responseData.data));
    }
  } catch (error) {
    yield put(SignUpAVNFailure(error));
  }
}

export function* onSignUpAVNStart() {
  yield takeEvery(signUpTypesActions.SIGNUP_AVN_START, signUpAVNAPIStart);
}

export function* signUpSaga() {
    yield all([
      call(onSignUpStart),
      call(onSignUpOTPStart),
      call(onSignUpAVNStart),
    ]);
  }