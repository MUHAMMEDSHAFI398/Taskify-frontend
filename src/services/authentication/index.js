import { setUserId } from "reduxStore/slices/login";
import APIRequest from "services/apiRequest";
import { LOGIN, RESEND_EMAIL, SIGNUP, VERIFY_EMAIL } from "urls/authentication";
import { replaceUrl } from "utils/utils";

export const postSignup = (payload, successCb, failedCb) => {
  return async (dispatch) => {
    try {
      await new APIRequest().post(SIGNUP, payload)
        .then((res) => {
          if (res.status === 201) {
            dispatch(setUserId(res.data.userId))
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


export const reSendEmail = (successCb, failedCb) => {
  return async (dispatch, getState) => {
    try {
      const { userId } = getState().auth
      await new APIRequest().post(replaceUrl(RESEND_EMAIL, 'userId', userId))
        .then((res) => {
          if (res.status === 201) {
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

export const verifyEmail = (data, successCb, failedCb) => {
  return async () => {
    try {
      const userId = data.userId
      const payload = {
        verificationLink: data.link
      }
      await new APIRequest().post(replaceUrl(VERIFY_EMAIL, 'userId', userId), payload)
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
            localStorage.setItem('accessToken', res.data.accessToken)
            localStorage.setItem('refreshToken', res.data.refreshToken)
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