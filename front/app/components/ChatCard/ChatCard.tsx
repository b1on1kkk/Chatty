import { usePathname } from "next/navigation";

import { SocketPerson } from "@/app/interfaces/interfaces";
import { FindOnlineUser } from "@/app/utils/FindOnlineUser";

import Image from "next/image";

interface TChatCard {
  idx: number;
  name: string;
  lastname: string;
  onlineUsers: SocketPerson[];
  avatar: string;
}

export default function ChatCard({
  idx,
  name,
  lastname,
  onlineUsers,
  avatar
}: TChatCard) {
  const pathname = usePathname().split("/");

  return (
    <div
      className={`flex gap-8 overflow-hidden hover:bg-[#0c111c] ${
        pathname[pathname.length - 1] === idx.toString() ? "bg-[#0c111c]" : ""
      } px-5 py-6 rounded-l-full transition-all duration-200 ease-in`}
    >
      <div className="w-12 h-12 bg-[#64c9fe] rounded-md relative flex items-center justify-center">
        <Image
          src={`${avatar}`}
          alt="avatar"
          width={50}
          height={50}
          className="bg-cover object-cover mb-1"
        />
        <div className="w-4 h-4 bg-gray-800 rounded-full absolute right-0 bottom-0 top-7 left-10 flex items-center justify-center">
          {FindOnlineUser(onlineUsers, idx) ? (
            <>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute" />
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </>
          ) : (
            <div className="w-2 h-2 bg-red-500 rounded-full" />
          )}
        </div>
      </div>

      <div className="flex flex-col w-full flex-1 gap-1">
        <div className="flex">
          <h2 className="font-medium flex-1">
            {name} {lastname}
          </h2>
          <span className="text-sm text-[#7f829e]">9:10 am</span>
        </div>
        <div className="text-sm text-[#7f829e]">
          {/* future last message */}
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
}
