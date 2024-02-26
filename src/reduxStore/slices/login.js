import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authError:''
  },
  reducers: {
    setAuthError: (state, action) => {
      state.authError = action.payload;
    }
  }
})

export const { setAuthError } = authSlice.actions

export default authSlice.reducer