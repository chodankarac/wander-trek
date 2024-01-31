import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  anchorElNav: HTMLElement | null;
  anchorElUser: HTMLElement | null;
};
const initialState: initialState = {
  anchorElNav: null,
  anchorElUser: null,
};
const appHeaderSlice = createSlice({
  name: "appHeader",
  initialState,
  reducers: {
    setOpenNavMenu: (state, action) => {
      state.anchorElNav = action.payload;
    },
    setCloseNavMenu: (state) => {
      state.anchorElNav = null;
    },
  },
});

export const { setOpenNavMenu, setCloseNavMenu } = appHeaderSlice.actions;
export default appHeaderSlice.reducer;
