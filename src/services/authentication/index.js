import APIRequest from "services/apiRequest";
import { LOGIN, SIGNUP } from "urls/authentication";

export const postSignup = (payload, successCb, failedCb) => {
  return async () => {
    try {
      await new APIRequest().post(SIGNUP, payload)
        .then((res) => {
          if (res.status === 201) {
            if (successCb) successCb()
          }
        }).catch((e) => {
          if (failedCb) failedCb(e.response?.data?.message)
          console.log(e)
        })
    } catch (e) {
      console.log(e);
    }
  };
};

export const postLogin = (payload, successCb, failedCb) => {
  return async () => {
    try {
      await new APIRequest().post(LOGIN, payload)
        .then((res) => {
          if (res.status === 200) {
            if (successCb) successCb()
          }
        }).catch((e) => {
          if (failedCb) failedCb(e.response?.data?.message)
          console.log(e)
        })
    } catch (e) {
      if (failedCb) failedCb(e.response?.data?.message)
      console.log(e);
    }
  };
};