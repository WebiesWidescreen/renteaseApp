import CommonActionTypes from "./common-types";


const initialState = {
    isIntroDone: false,
};

export default function commonReducer(state = initialState, action: any) {
    switch (action.type) {
      case CommonActionTypes.IS_INTRO_DONE:
        return { ...state, isIntroDone: !state.isIntroDone };
      default:
        return state;
    }
  }