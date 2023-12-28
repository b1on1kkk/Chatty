"use client";

import Link from "next/link";

// components
import ChatCard from "../ChatCard/ChatCard";
import Header from "./Header/Header";
import MakingFriendsBlock from "../MakingFriendsBlock/MakingFriendsBlock";
//

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { useEffect } from "react";
import { getFriends } from "@/app/redux/features/get_friends.slice";
//

export default function LeftAsideMenu() {
  const state = useSelector((state: RootState) => state.aside_menu_service);
  const users = useSelector((state: RootState) => state.get_users.user);
  const user = useSelector((state: RootState) => state.get_user.user);
  const friends = useSelector((state: RootState) => state.get_friends.friends);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFriends(user.id));
  }, [dispatch, user.id]);

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
        {friends.map((friend, idx) => {
          return (
            <Link href={`/chats/${friend.friend_id}`} key={idx}>
              <ChatCard
                idx={friend.friend_id}
                name={friend.name}
                lastname={friend.lastname}
              />
            </Link>
          );
        })}
        {/*  */}
      </main>
    </aside>
  );
}
