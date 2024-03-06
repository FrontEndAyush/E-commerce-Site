import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Reducer/Reducer";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
  },
});
