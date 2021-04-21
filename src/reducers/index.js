import { combineReducers } from "redux";

import authentication from "./authenticationReducer";
import digiNativePOC from "./digiNativePOCReducer";

export default combineReducers({
  authentication,
  digiNativePOC,
});
