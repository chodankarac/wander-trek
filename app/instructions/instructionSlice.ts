"use client";
import { createSlice } from "@reduxjs/toolkit";

type Rule = {
  id: number;
  title: string;
  description: string;
};
type initialState = {
  rules: Rule[];
};
const initialState: initialState = {
  rules: [],
};
const instructionSlice = createSlice({
  name: "instructionPage",
  initialState,
  reducers: {
    setRules: (state, action) => {
      state.rules = action.payload;
    },
  },
});

export const { setRules } = instructionSlice.actions;
export default instructionSlice.reducer;
