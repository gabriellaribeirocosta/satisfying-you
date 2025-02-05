import { configureStore } from "@reduxjs/toolkit";
import idRouterSlice from "./slices/idRouterSlice";


export const store = configureStore({
  reducer: {
    idRouter: idRouterSlice
  },
});

// Tipagem para `useSelector` e `useDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
