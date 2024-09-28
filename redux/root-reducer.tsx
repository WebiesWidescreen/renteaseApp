import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import your reducers here
import loginReducer from './login/login-reducers';
import commonReducer from './common/common-reducers';
import signUpReducer from './signUp/signUp-reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['rncommon', 'rnlogin'],
  };

const rootReducer = combineReducers({
  rnlogin: loginReducer,
  rncommon: commonReducer,
  rnsignUp: signUpReducer,
});

export default persistReducer(persistConfig, rootReducer);