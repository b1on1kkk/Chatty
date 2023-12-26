import ChatCard from "../ChatCard/ChatCard";
import Header from "./Header/Header";

import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function LeftAsideMenu() {
  const state = useSelector((state: RootState) => state.aside_menu_service);

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
      <main className="overflow-auto pl-3 flex-1 w-420 scrollbar-none scrollbar-thumb-gray-700 hover:scrollbar-thin transiton-all duration-200 ease-in">
        {fakeArray.map((_, idx) => {
          return (
            <Link href={`/chats/${idx + 1}`} key={idx}>
              <ChatCard />
            </Link>
          );
        })}
      </main>
    </aside>
  );
}
