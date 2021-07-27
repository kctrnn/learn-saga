import { PayloadAction } from "@reduxjs/toolkit";
import { fork, take } from "redux-saga/effects";
import { login, LoginPayload, logout } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  console.log("Handle login", payload);
}

function* handleLogout() {
  console.log("Handle logout");
}

function* authSaga() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(logout.type);
    yield fork(handleLogout);
  }
}

export default authSaga;
