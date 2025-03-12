import { configureStore } from "@reduxjs/toolkit";
import { colorsSlice } from "./colors/colorsSlice";

const store = configureStore({
   reducer: {
      colors: colorsSlice.reducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
