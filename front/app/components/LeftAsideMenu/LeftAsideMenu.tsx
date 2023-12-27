"use client";

import Link from "next/link";

// components
import ChatCard from "../ChatCard/ChatCard";
import Header from "./Header/Header";
import MakingFriendsBlock from "../MakingFriendsBlock/MakingFriendsBlock";
//

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
//

export default function LeftAsideMenu() {
  const state = useSelector((state: RootState) => state.aside_menu_service);
  const users = useSelector((state: RootState) => state.get_users.user);

  const fakeArray = new Array(3).fill(0);

  return (
    <aside
      className={`flex flex-col left-0 top-0 z-10 overflow-hidden ${
        state.showLess ? " w-110" : "w-420"
      } bg-gray-800 h-full ${
        state.hoverCloseButton ? "opacity-50" : ""
      } transition-all duration-200`}
    >
      <Header showLess={state.showLess} />

      {state.addingFriends && <MakingFriendsBlock users={users} />}

      <main className="overflow-auto pl-3 flex-1 w-420 scrollbar-none scrollbar-thumb-gray-700 hover:scrollbar-thin transiton-all duration-200 ease-in flex flex-col gap-2">
        {/* future friends */}
        {fakeArray.map((_, idx) => {
          return (
            <Link href={`/chats/${idx + 1}`} key={idx}>
              <ChatCard idx={idx + 1} />
            </Link>
          );
        })}
        {/*  */}
      </main>
    </aside>
  );
}
