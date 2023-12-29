"use client";
import { useEffect } from "react";
import Link from "next/link";

// components
import ChatCard from "../ChatCard/ChatCard";
import Header from "./Header/Header";
import Loading from "../Loading/Loading";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { getUsers } from "@/app/redux/features/get_user_chats.slice";
import { setChosenChat } from "@/app/redux/features/left_aside_service.slice";
import { setOnlineUsers } from "@/app/redux/features/left_aside_service.slice";

// socket
import { io, Socket } from "socket.io-client";
import {
  ServerToClientEvents,
  ClientToServerEvents
} from "../../../../typings";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:2000"
);

export default function LeftAsideMenu() {
  const state = useSelector((state: RootState) => state.aside_menu_service);
  const user = useSelector((state: RootState) => state.get_user.user);
  const user_pending = useSelector((state: RootState) => state.get_user.status);
  const chats = useSelector((state: RootState) => state.get_users_chats.users);
  const chats_pending = useSelector(
    (state: RootState) => state.get_users_chats.status
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (user_pending === "fulfilled") {
      socket.emit("userConnected", { new_connected_user_id: user.id });

      socket.on("getOnlineUsersId", (data) => {
        dispatch(setOnlineUsers(data));
      });
    }
  }, [user, user_pending, dispatch]);

  return (
    <aside
      className={`flex flex-col left-0 top-0 z-10 overflow-hidden ${
        state.showLess ? " w-110" : "w-420"
      } bg-gray-800 h-full ${
        state.hoverCloseButton ? "opacity-50" : ""
      } transition-all duration-200`}
    >
      <Header showLess={state.showLess} />

      <main className="overflow-auto pl-3 flex-1 w-420 scrollbar-none scrollbar-thumb-gray-700 hover:scrollbar-thin transiton-all duration-200 ease-in flex flex-col gap-2">
        {chats_pending === "pending" ? (
          <div className="flex gap-3 h-full items-center justify-center">
            <Loading />
          </div>
        ) : (
          <>
            {chats.length > 0 ? (
              <>
                {chats.map((chat, idx) => {
                  return (
                    <Link
                      href={`/chats/${chat.id}`}
                      key={idx}
                      onClick={() => dispatch(setChosenChat(chat.id))}
                    >
                      <ChatCard
                        idx={chat.id}
                        name={chat.name}
                        lastname={chat.lastname}
                        onlineUsers={state.onlineUsers}
                      />
                    </Link>
                  );
                })}
              </>
            ) : (
              <div className="h-full flex justify-center items-center">
                Add friends to start chatting!
              </div>
            )}
          </>
        )}
      </main>
    </aside>
  );
}
