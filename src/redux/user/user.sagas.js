import { takeLatest, call, put, all } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  auth,
  googleProvider,
  creatUserProfileDocument,
} from "../../firebase/firebase.utils";
import { googleSignIn, emailSignIn, googleSignInFailure } from "./user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(creatUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(
      call(googleSignIn, { id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (e) {
    yield put(call(googleSignInFailure, e));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
