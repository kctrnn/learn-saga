import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Student } from 'models';

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highestStudentList: Student[];
  lowestStudentList: Student[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },

  highestStudentList: [],
  lowestStudentList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,

  reducers: {
    fetchDashboardData: (state) => {
      state.loading = true;
    },

    fetchDashboardDataSuccess: (state) => {
      state.loading = false;
    },

    fetchDashboardDataFailed: (state) => {
      state.loading = false;
    },

    setStatistics: (state, action: PayloadAction<DashboardStatistics>) => {
      state.statistics = action.payload;
    },

    setHighestStudentList: (state, action: PayloadAction<Student[]>) => {
      state.highestStudentList = action.payload;
    },

    setLowestStudentList: (state, action: PayloadAction<Student[]>) => {
      state.lowestStudentList = action.payload;
    },
  },
});

// Actions
export const {
  fetchDashboardData,
  fetchDashboardDataFailed,
  fetchDashboardDataSuccess,
  setStatistics,
  setHighestStudentList,
  setLowestStudentList,
} = dashboardSlice.actions;

// Selectors
export const selectDashboardStatistics = (state: RootState) =>
  state.dashboard.statistics;

// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
