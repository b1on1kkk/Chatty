import { createSlice } from "@reduxjs/toolkit";

interface TAsideMenuService {
  showLess: boolean;
  hoverCloseButton: boolean;
  searchInputFocus: boolean;
  enterMessageInputFocus: boolean;
}

const initialState: TAsideMenuService = {
  showLess: false,
  hoverCloseButton: false,
  searchInputFocus: false,
  enterMessageInputFocus: false
};

export const AsideMenuService = createSlice({
  name: "AsideMenuService",
  initialState,
  reducers: {
    setShowLess: (state, action) => {
      return {
        ...state,
        showLess: action.payload
      };
    },
    setHoverCloseButton: (state, action) => {
      return {
        ...state,
        hoverCloseButton: action.payload
      };
    },
    setSearchInputFocus: (state, action) => {
      return {
        ...state,
        searchInputFocus: action.payload
      };
    },
    setEnterMessageInputFocus: (state, action) => {
      return {
        ...state,
        enterMessageInputFocus: action.payload
      };
    }
  }
});

export const {
  setShowLess,
  setHoverCloseButton,
  setSearchInputFocus,
  setEnterMessageInputFocus
} = AsideMenuService.actions;
export default AsideMenuService.reducer;
