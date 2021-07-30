import { PayloadAction } from "@reduxjs/toolkit";
import studentApi from "api/studentApi";
import { ListParams, ListResponse, Student } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchStudentList,
  fetchStudentListFailed,
  fetchStudentListSuccess,
} from "./studentSlice";

function* handleFetchStudentList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Student> = yield call(
      studentApi.getAll,
      action.payload
    );
    yield put(fetchStudentListSuccess(response));
  } catch (error) {
    yield put(fetchStudentListFailed());
  }
}

function* studentSaga() {
  yield takeLatest(fetchStudentList.type, handleFetchStudentList);
}

export default studentSaga;
