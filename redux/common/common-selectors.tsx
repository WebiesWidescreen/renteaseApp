import { createSelector } from 'reselect';

const reducerVal = (state: { rncommon: any; }) => state.rncommon;

export const isIntroCompleted = createSelector(
  [reducerVal],
  (rncommon) => rncommon.isIntroDone,
);

