import { all } from 'redux-saga/effects';
import { loginSaga } from './login/login-saga'; // Import your individual sagas
import { signUpSaga } from './signUp/signUp-saga';

// Root saga to combine all sagas
export default function* rootSaga() {
  yield all([
    loginSaga(), // Add other sagas here
    signUpSaga(),
  ]);
}