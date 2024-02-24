import APIRequest from "services/apiRequest";
import { SIGNUP } from "urls/authentication";

export const postSignup = (payload) => {
    console.log(payload)
    console.log("at post signup")
    return (dispatch, getState) => {
        console.log("at post signup")

      try {
        new APIRequest().post(SIGNUP, payload).then((res) => {
            console.log("hihi")
        });
      } catch (e) {
        console.log(e);
      }
    };
  };