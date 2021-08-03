import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { push } from "connected-react-router";
import { User } from "models";
import { call, delay, fork, put, take } from "redux-saga/effects";
import {
  login,
  loginFailed,
  LoginPayload,
  loginSuccess,
  logout,
} from "./authSlice";

export interface LoginResponse {
  jwt: string;
  user: User;
}

// function* handleLogin(payload: LoginPayload) {
//   try {
//     const { jwt, user }: LoginResponse = yield call(authApi.login, payload);

//     localStorage.setItem("access_token", jwt);
//     yield put(loginSuccess(user));

//     // redirect to admin page
//     yield put(push("/admin/dashboard"));
//   } catch (error) {
//     console.log("Failed to login", error);
//     yield put(loginFailed());
//   }
// }

// Fake login
function* handleFakeLogin(payload: LoginPayload) {
  try {
    yield delay(1000);

    localStorage.setItem("access_token", "fake_token");
    yield put(
      loginSuccess({
        id: "fakeId",
        email: "fake@gmail.com",
        name: "Fake Login",
      })
    );

    // redirect to admin page
    yield put(push("/admin/dashboard"));
  } catch (error) {
    console.log("Failed to login", error);
    yield put(loginFailed());
  }
}

function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem("access_token");

  // redirect to login page
  yield put(push("/login"));
}

function* authSaga() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(login.type);
      yield fork(handleFakeLogin, action.payload);
    }

    yield take(logout.type);
    yield call(handleLogout);
  }
}

export default authSaga;
