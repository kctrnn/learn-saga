import authSaga from "features/auth/authSaga";
import counterSaga from "features/counter/counterSaga";
import studentSaga from "features/student/studentSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([counterSaga(), authSaga(), studentSaga()]);
}
