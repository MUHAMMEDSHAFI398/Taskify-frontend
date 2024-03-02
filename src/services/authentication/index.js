import APIRequest from "services/apiRequest";
import { LOGIN, SIGNUP, VERIFY_EMAIL } from "urls/authentication";
import { replaceUrl } from "utils/utils";

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

export const verifyEmail = (data, successCb, failedCb) => {
  return async () => {
    try {
      const userId = data.userId
      const payload = {
        verificationLink:data.link
      }
      await new APIRequest().post(replaceUrl(VERIFY_EMAIL,'userId',userId), payload)
        .then((res) => {
          if (res.status === 200) {
            if (successCb) successCb()
          }
        }).catch((e) => {
          if (failedCb) failedCb()
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