import { STORE_APP_DATA } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_APP_DATA:
      return action.payload;
    default:
      return state;
  }
};
