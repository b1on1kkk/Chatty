"use client";

// components
import Header from "../../components/MainChat/Header/Header";
import Footer from "../../components/MainChat/Footer/Footer";
//

import { socket } from "@/app/components/LeftAsideMenu/LeftAsideMenu";

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useState } from "react";

// async function CreateRoom(user_id: number, cb: (key: string) => void) {
//   console.log(user_id);

//   try {
//     const res = await axios.get(
//       `http://localhost:2000/chat_id?user_id=${user_id}`
//     );

//     cb(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

export default function Chat() {
  const onlineUsers = useSelector(
    (state: RootState) => state.aside_menu_service.onlineUsers
  );
  const user = useSelector((state: RootState) => state.get_user.user);

  const [messages, setMessages] = useState<
    { message: string; sender_id: number }[]
  >([]);

  function Submit(e: React.FormEvent<HTMLFormElement>, text: string) {
    e.preventDefault();

    socket.emit("clientMessage", {
      msg: text,
      room: "1",
      sender_id: user.id
    });
  }

  // useEffect(() => {
  //   CreateRoom(user.id, (key) => {
  //     setChatKey(key);
  //   });
  // }, [user.id]);

  socket.on("serverMessage", (data) => {
    setMessages([
      ...messages,
      { message: data.msg, sender_id: data.sender_id }
    ]);
  });

  return (
    <>
      <Header onlineUsers={onlineUsers} />
      <main className="flex-1 px-16 flex flex-col overflow-auto pt-5 scrollbar-thin scrollbar-thumb-gray-700">
        {messages.map((message, idx) => {
          if (message.sender_id === user.id) {
            return (
              // our messages
              <div className="flex flex-col items-end gap-3 my-2" key={idx}>
                <div className="flex items-end gap-3">
                  <div
                    className={`w-[40rem] px-10 py-4 bg-gray-800 rounded-l-[60px] rounded-t-[60px]`}
                  >
                    <span>{message.message}</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                </div>
                <div className="text-xs text-[#7f829e]">4:11 pm</div>
              </div>
            );
          } else {
            return (
              // another user messages
              <div className="flex flex-col gap-3 my-2" key={idx}>
                <div className="flex items-end gap-3">
                  <div className="w-8 h-8 bg-gray-600 rounded"></div>
                  <div
                    className={`w-[40rem] px-10 py-4 bg-indigo-500 rounded-r-[60px] rounded-t-[60px] text-white`}
                  >
                    <span>{message.message}</span>
                  </div>
                </div>
                <div className="text-xs text-[#7f829e]">4:11 pm</div>
              </div>
            );
          }
        })}
      </main>
      <Footer Submit={(e, text) => Submit(e, text)} />
    </>
  );
}
