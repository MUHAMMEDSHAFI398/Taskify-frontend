import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authError: '',
    userId: ''
  },
  reducers: {
    setAuthError: (state, action) => {
      state.authError = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    }
  }
})

export const {
  setAuthError,
  setUserId,
  setAccessToken,
  setRefreshToken
} = authSlice.actions

export default authSlice.reducer

export const getAccessToken = () => {
  return (dispatch, getState) =>
    getState().auth.accessToken
};

export const getRefreshToken = () => {
  return (dispatch, getState) =>
    getState().auth.refreshToken
};

export const updateAccessToken = (accessToken) => {
  return (dispatch) => {
    dispatch(setAccessToken(accessToken));
  };
};

export const updateRefreshToken = (refreshToken) => {
  return (dispatch) => {
    dispatch(setRefreshToken(refreshToken));
  };
};
