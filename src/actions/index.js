import { FETCH_LOGIN_INFO } from "./types";

export function fetchLoginInfo() {
    return dispatch => {
        console.log("Action Dispatched: Fetch_Login_Info")
        let data1 = {"USER" : "ASHIQ"}
        dispatch({
            type: FETCH_LOGIN_INFO,
            payload: data1
        })
    }
}