"use client";

import { useEffect, useState } from "react";

// components
import Header from "../../components/MainChat/Header/Header";
import Footer from "../../components/MainChat/Footer/Footer";
import Message from "@/app/components/Message/Message";

// socket
import { socket } from "@/app/components/LeftAsideMenu/LeftAsideMenu";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { UsersInf } from "@/app/redux/features/get_user.slice";

// utils
import { FindUserChatWith } from "@/app/utils/FindUserChatWith";
import { TimeFormat } from "@/app/utils/TimeFormat";

export default function Chat() {
  const onlineUsers = useSelector(
    (state: RootState) => state.aside_menu_service.onlineUsers
  );
  const chat_id = useSelector(
    (state: RootState) => state.aside_menu_service.chosenChat
  );
  const user = useSelector((state: RootState) => state.get_user.user);
  const users = useSelector((state: RootState) => state.get_users_chats.users);

  const [messages, setMessages] = useState<
    { message: string; sender_id: number; time: string }[]
  >([]);
  const [userChatWith, setUserChatWith] = useState<UsersInf | undefined>(
    undefined
  );

  function Submit(e: React.FormEvent<HTMLFormElement>, text: string) {
    e.preventDefault();

    socket.emit("privateMessage", {
      text: text,
      user_id: chat_id
    });
  }

  useEffect(() => {
    setUserChatWith(FindUserChatWith(users, chat_id));
  }, [chat_id, users]);

  socket.on("privateServerMessage", (data) => {
    setMessages([
      ...messages,
      { message: data.text, sender_id: data.sender_id, time: TimeFormat() }
    ]);
  });

  return (
    <>
      <Header onlineUsers={onlineUsers} />
      <main className="flex-1 px-16 flex flex-col overflow-auto pt-5 scrollbar-thin scrollbar-thumb-gray-700">
        {messages.map((message, idx) => {
          if (message.sender_id !== user.id) {
            return (
              <Message
                message={message.message}
                avatar={user.avatar}
                time={message.time.slice(0, -3)}
                status={"our"}
                key={idx}
              />
            );
          } else {
            return (
              <Message
                message={message.message}
                avatar={userChatWith!.avatar}
                time={message.time.slice(0, -3)}
                status={"person"}
                key={idx}
              />
            );
          }
        })}
      </main>
      <Footer Submit={(e, text) => Submit(e, text)} />
    </>
  );
}
