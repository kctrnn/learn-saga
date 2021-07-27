import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { User } from "models";

export interface authState {
  currentUser: Partial<User>;
  logging: boolean;
  isLoggedIn: boolean;
}

const initialState: authState = {
  isLoggedIn: false,
  logging: false,
  currentUser: {},
};

export interface LoginPayload {
  email: string;
  password: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = {};
    },

    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },

    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },

    loginFailed(state) {
      state.logging = false;
      state.isLoggedIn = false;
    },
  },
});

// Actions
export const { logout, login } = authSlice.actions;

// Selector
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

// Reducer
export default authSlice.reducer;
