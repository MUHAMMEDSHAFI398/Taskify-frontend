const { REACT_APP_BASE_URL: BASE_URL } = process.env;

export const SIGNUP = `${BASE_URL}/auth/signup`;
export const LOGIN = `${BASE_URL}/auth/login`;
export const VERIFY_EMAIL = `${BASE_URL}/auth/:userId/email-verification`
export const RESEND_EMAIL = `${BASE_URL}/auth/:userId/resend-email`