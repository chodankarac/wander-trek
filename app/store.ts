import { configureStore } from "@reduxjs/toolkit";
import appHeaderReducer from "../features/Header/appHeaderSlice";

export const store = configureStore({
  reducer: {
    appHeader: appHeaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
