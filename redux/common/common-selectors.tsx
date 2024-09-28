import { createSelector } from 'reselect';

const selectUser = (state: { rncommon: any; }) => state.rncommon;

export const isIntroCompleted = createSelector(
  [selectUser],
  (rncommon) => rncommon.isIntroDone,
);

