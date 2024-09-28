import loginTypesActions from './login-types';

const initialState = {
  loginStatus: null as boolean | null, // Initialize as null
  loginResp: [] as any[],
  };
  
  export default function loginReducer(state = initialState, action: any) {
    switch (action.type) {
      case loginTypesActions.LOGIN_SUCCESS:
        return { ...state, loginStatus: true };
      case loginTypesActions.LOGIN_FAILURE:
        return { ...state, loginStatus: false };
    case loginTypesActions.LOGIN_RESET:
            return { ...state, loginStatus: null };
      default:
        return state;
    }
  }