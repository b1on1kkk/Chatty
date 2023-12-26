import { configureStore } from "@reduxjs/toolkit";
import { AsideMenuService } from "./features/left_aside_service.slice";

export const store = configureStore({
  reducer: {
    aside_menu_service: AsideMenuService.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
