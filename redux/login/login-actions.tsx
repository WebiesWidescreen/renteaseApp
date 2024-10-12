import loginTypesActions from './login-types';

export const loginStart = (data: any) => ({
    type: loginTypesActions.LOGIN_START,
    payload: data,
});

export const loginSuccess = (data: any) => ({
    type: loginTypesActions.LOGIN_SUCCESS,
    payload: data,
});
export const loginFailure = (data: any) => ({
    type: loginTypesActions.LOGIN_FAILURE,
    payload: data,
});
export const loginReset = () => ({
    type: loginTypesActions.LOGIN_RESET,
});