import { createSelector } from 'reselect';

const reducerVal = (state: { rnsignUp: any; }) => state.rnsignUp;

export const getSignUpStatus = createSelector(
    [reducerVal],
    (rnsignUp) => rnsignUp.signUpStatus,
);

export const getSignUpOTPStatus = createSelector(
    [reducerVal],
    (rnsignUp) => rnsignUp.signUpOTPStatus,
);

export const getSignUpAVNStatus = createSelector(
    [reducerVal],
    (rnsignUp) => rnsignUp.signUpAVNStatus,
);
