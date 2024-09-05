"use client";

import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  faqs: [{ question: string; answer: string }];
};
const initialState: InitialState = {
  faqs: [{ question: "", answer: "" }],
};
const faqSlice = createSlice({
  name: "faqPage",
  initialState,
  reducers: {
    setFaqs: (state, action) => {
      state.faqs = action.payload;
    },
  },
});

export const { setFaqs } = faqSlice.actions;
export const faqPageReducer = faqSlice.reducer;
