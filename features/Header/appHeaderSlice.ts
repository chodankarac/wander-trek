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
    setOpenUserMenu: (state, action) => {
      state.anchorElUser = action.payload;
    },
    setCloseUserMenu: (state) => {
      state.anchorElUser = null;
    },
  },
});

export default appHeaderSlice.reducer;
export const { setOpenNavMenu, setCloseNavMenu, setOpenUserMenu, setCloseUserMenu } = appHeaderSlice.actions;
