import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; //parte do exemplo

export const store = configureStore({
  reducer: {
    counter: counterReducer, //é um exemplo, isso daqui nn tem nada a ver com nossso código
  },
});
