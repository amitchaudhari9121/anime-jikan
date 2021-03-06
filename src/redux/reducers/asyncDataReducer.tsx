import { MyAction } from "../actions/actions";

export const asyncDataReducer = (state: any = null, action: any) => {
  switch (action.type) {
    case MyAction.FETCH:
      return state;
    case MyAction.RECEIVE:
      return action.payload;
    default:
      return state;
  }
};
