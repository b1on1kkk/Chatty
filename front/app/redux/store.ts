import { configureStore } from "@reduxjs/toolkit";
import { AsideMenuService } from "./features/left_aside_service.slice";
import { SessionStatus } from "./features/get_session_status.slice";
import { User } from "./features/get_user.slice";
import { Users } from "./features/get_user_chats.slice";

export const store = configureStore({
  reducer: {
    aside_menu_service: AsideMenuService.reducer,
    session_status: SessionStatus.reducer,
    get_user: User.reducer,
    get_users_chats: Users.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
