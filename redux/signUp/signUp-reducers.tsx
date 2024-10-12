import signUpTypesActions from './signUp-types';

const initialState = {
  signUpStatus: null as boolean | null, // Initialize as null
  signUpResp: [] as any[],
  signUpOTPStatus: null as boolean | null, // Initialize as null
  signUpOTPResp: [] as any[],
  signUpAVNStatus: null as boolean | null, // Initialize as null
  signUpAVNResp: [] as any[],
};

export default function signUpReducer(state = initialState, action: any) {
  switch (action.type) {
    case signUpTypesActions.SIGNUP_SUCCESS:
      return { ...state, signUpStatus: true };
    case signUpTypesActions.SIGNUP_FAILURE:
      return { ...state, signUpStatus: false };
    case signUpTypesActions.SIGNUP_RESET:
      return { ...state, signUpStatus: null };

    case signUpTypesActions.SIGNUP_OTP_SUCCESS:
      return { ...state, signUpOTPStatus: true };
    case signUpTypesActions.SIGNUP_OTP_FAILURE:
      return { ...state, signUpOTPStatus: false };
    case signUpTypesActions.SIGNUP_OTP_RESET:
      return { ...state, signUpOTPStatus: null };

    case signUpTypesActions.SIGNUP_AVN_SUCCESS:
      return { ...state, signUpAVNStatus: true };
    case signUpTypesActions.SIGNUP_AVN_FAILURE:
      return { ...state, signUpAVNStatus: false };
    case signUpTypesActions.SIGNUP_AVN_RESET:
      return { ...state, signUpAVNStatus: null };
    default:
      return state;
  }
}