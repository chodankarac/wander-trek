"use client";
import { configureStore } from "@reduxjs/toolkit";
import appHeaderReducer from "../components/organism/Header/AppHeader/appHeaderSlice";
import instructionPageReducer from "../app/instructions/instructionSlice";

export const store = configureStore({
  reducer: {
    appHeader: appHeaderReducer,
    instructionPage: instructionPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
