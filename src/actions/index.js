import { FETCH_LOGIN_INFO, STORE_APP_DATA } from "./types";

export function fetchLoginInfo() {
  return (dispatch) => {
    let data1 = { USER: "ASHIQ" };
    dispatch({
      type: FETCH_LOGIN_INFO,
      payload: data1,
    });
  };
}

export function storeAppData(payload) {
  return (dispatch) => {
    let data1 = payload;
    console.log("ac" + JSON.stringify(payload));
    dispatch({
      type: STORE_APP_DATA,
      payload: { ...data1 },
    });
  };
}
