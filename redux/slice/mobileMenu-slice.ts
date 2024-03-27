import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: MobileMenuState;
};
type MobileMenuState = {
  isOpenMenu: boolean;
};

const initialState = {
  value: {
    isOpenMenu: false,
  } as MobileMenuState,
} as InitialState;

export const mobileMenu = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openMenu: (state, action: PayloadAction) => {
      return {
        value: {
          isOpenMenu: true,
        },
      };
    },
    closeMenu: (state, action: PayloadAction) => {
      return {
        value: {
          isOpenMenu: false,
        },
      };
    },
  },
});

export const { openMenu, closeMenu } = mobileMenu.actions;
export default mobileMenu.reducer;
