import { createSelector } from 'reselect';

const reducerVal = (state: any) => state.rnlogin;

export const getLoginStatus = createSelector(
    [reducerVal],
    (rnlogin) => rnlogin.loginStatus,
);

export const getLoadData = createSelector(
    [reducerVal],
    (rnlogin) => rnlogin.loginLoadData,
);

