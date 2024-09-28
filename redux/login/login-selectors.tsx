import { createSelector } from 'reselect';

const selectUser = (state: { rnlogin: any; }) => state.rnlogin;

export const getLoginStatus = createSelector(
    [selectUser],
    (rnlogin) => rnlogin.loginStatus,
);

