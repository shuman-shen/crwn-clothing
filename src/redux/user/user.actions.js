import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignIn = (user) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (error) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailPasword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailPasword,
});

export const emailSignIn = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (error) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error,
});
