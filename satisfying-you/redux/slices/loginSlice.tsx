import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  uid: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  errorMessage: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.errorMessage = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.isAuthenticated = false;
      state.errorMessage = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.errorMessage = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
