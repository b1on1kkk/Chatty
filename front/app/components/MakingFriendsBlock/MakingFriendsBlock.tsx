import { UsersInf } from "@/app/redux/features/get_users.slice";

interface TMakingFriendsBlock {
  users: UsersInf[];
}

export default function MakingFriendsBlock({ users }: TMakingFriendsBlock) {
  return (
    <div className="border-b-1 border-gray-700 pl-8 pr-3 py-4 mb-3 max-h-80 overflow-auto scrollbar-thumb-gray-700 scrollbar-thin transiton-all duration-200 ease-in">
      <div className="flex flex-col gap-3">
        {users.map((user, idx) => {
          return (
            <div key={idx} className="flex items-center">
              <div className="w-12 h-12 bg-gray-500 rounded-md relative" />
              <div className="flex flex-col ml-8 gap-1 flex-1">
                <span className="text-sm">
                  {user.name} {user.lastname}
                </span>
                <span className="text-xs text-gray-400 font-bold">
                  {user.email}
                </span>
              </div>
              <button className="px-4 py-2 border-1 rounded-lg text-sm opacity-30 hover:bg-indigo-500 hover:opacity-100 hover:border-transparent transition-all duration-200 ease-in">
                Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
