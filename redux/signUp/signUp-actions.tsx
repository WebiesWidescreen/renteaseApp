import signUpTypesActions from './signUp-types';

export const SignUpStart = (data: any) => ({
    type: signUpTypesActions.SIGNUP_START,
    payload: data,
});

export const SignUpSuccess = (data: any) => ({
    type: signUpTypesActions.SIGNUP_SUCCESS,
    payload: data,
});
export const SignUpFailure = (data: any) => ({
    type: signUpTypesActions.SIGNUP_FAILURE,
    payload: data,
});
export const SignUpReset = () => ({
    type: signUpTypesActions.SIGNUP_RESET,
});

export const SignUpOTPStart = (data: any) => ({
    type: signUpTypesActions.SIGNUP_OTP_START,
    payload: data,
});

export const SignUpOTPSuccess = (data: any) => ({
    type: signUpTypesActions.SIGNUP_OTP_SUCCESS,
    payload: data,
});
export const SignUpOTPFailure = (data: any) => ({
    type: signUpTypesActions.SIGNUP_OTP_FAILURE,
    payload: data,
});
export const SignUpOTPReset = () => ({
    type: signUpTypesActions.SIGNUP_OTP_RESET,
});

export const SignUpAVNStart = (data: any) => ({
    type: signUpTypesActions.SIGNUP_AVN_START,
    payload: data,
});

export const SignUpAVNSuccess = (data: any) => ({
    type: signUpTypesActions.SIGNUP_AVN_SUCCESS,
    payload: data,
});
export const SignUpAVNFailure = (data: any) => ({
    type: signUpTypesActions.SIGNUP_AVN_FAILURE,
    payload: data,
});
export const SignUpAVNReset = () => ({
    type: signUpTypesActions.SIGNUP_AVN_RESET,
});