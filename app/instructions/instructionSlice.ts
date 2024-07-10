"use client";
import { createSlice } from "@reduxjs/toolkit";

type Rule = {
  id: number;
  title: string;
  description: string;
};
type InitialState = {
  rules: Rule[];
};
const initialState: InitialState = {
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
