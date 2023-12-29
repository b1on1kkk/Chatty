import { createSlice } from "@reduxjs/toolkit";

import { SocketPerson } from "@/app/interfaces/interfaces";

interface TAsideMenuService {
  showLess: boolean;
  hoverCloseButton: boolean;
  searchInputFocus: boolean;
  enterMessageInputFocus: boolean;
  chosenChat: number;
  onlineUsers: SocketPerson[];
}

const initialState: TAsideMenuService = {
  showLess: false,
  hoverCloseButton: false,
  searchInputFocus: false,
  enterMessageInputFocus: false,
  chosenChat: 0,
  onlineUsers: []
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
    },
    setChosenChat: (state, action) => {
      return {
        ...state,
        chosenChat: action.payload
      };
    },
    setOnlineUsers: (state, action) => {
      return {
        ...state,
        onlineUsers: action.payload
      };
    }
  }
});

export const {
  setShowLess,
  setHoverCloseButton,
  setSearchInputFocus,
  setEnterMessageInputFocus,
  setChosenChat,
  setOnlineUsers
} = AsideMenuService.actions;
