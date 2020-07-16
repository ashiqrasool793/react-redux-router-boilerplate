import { FETCH_LOGIN_INFO } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LOGIN_INFO:
            return action.payload;
        default:
            return state;
    }
};