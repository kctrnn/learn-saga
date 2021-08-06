import studentApi from 'api/studentApi';
import { fetchCityListFailed } from 'features/city/citySlice';
import { ListResponse, Student } from 'models';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchDashboardData,
  fetchDashboardDataSuccess,
  setHighestStudentList,
  setLowestStudentList,
  setStatistics,
} from './dashboardSlice';

function* fetchStatistics() {
  const [
    maleStudentList,
    femaleStudentList,
    highMarkStudentList,
    lowMarkStudentList,
  ]: Array<Student[]> = yield all([
    call(studentApi.getAll, { gender: 'male' }),
    call(studentApi.getAll, { gender: 'female' }),
    call(studentApi.getAll, { mark_gte: 8 }),
    call(studentApi.getAll, { mark_gte: 5 }),
  ]);

  yield put(
    setStatistics({
      maleCount: maleStudentList.length,
      femaleCount: femaleStudentList.length,
      highMarkCount: highMarkStudentList.length,
      lowMarkCount: lowMarkStudentList.length,
    })
  );
}

function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _sort: 'mark',
    _order: 'desc',
    _limit: 5,
  });

  yield put(setHighestStudentList(data));
}

function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _sort: 'mark',
    _order: 'asc',
    _limit: 5,
  });

  yield put(setLowestStudentList(data));
}

function* handleFetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
    ]);

    yield put(fetchDashboardDataSuccess());
  } catch (error) {
    yield put(fetchCityListFailed());
  }
}

function* dashboardSaga() {
  yield takeLatest(fetchDashboardData.type, handleFetchDashboardData);
}

export default dashboardSaga;
