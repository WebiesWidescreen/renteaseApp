import { createSelector } from 'reselect';

const selectUser = (state: { rnsignUp: any; }) => state.rnsignUp;

export const getSignUpStatus = createSelector(
    [selectUser],
    (rnsignUp) => rnsignUp.signUpStatus,
);

export const getSignUpOTPStatus = createSelector(
    [selectUser],
    (rnsignUp) => rnsignUp.signUpOTPStatus,
);

export const getSignUpAVNStatus = createSelector(
    [selectUser],
    (rnsignUp) => rnsignUp.signUpAVNStatus,
);
