import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models";

export interface authState {
  currentUser: Partial<User>;
  logging: boolean;
  isLoggedIn: boolean;
}

const initialState: authState = {
  currentUser: {},
  isLoggedIn: false,
  logging: false,
};

export interface LoginPayload {
  email: string;
  password: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },

    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },

    loginFailed(state) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = {};
    },
  },
});

// Actions
export const { logout, login, loginSuccess, loginFailed } = authSlice.actions;

// Selector

// Reducer
export default authSlice.reducer;
