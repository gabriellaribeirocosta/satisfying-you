import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; ///Sim eu importei tudo errado pq peguei do chat KKKKKKKKKKKKKKKKK


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Tipagem para `useSelector` e `useDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
