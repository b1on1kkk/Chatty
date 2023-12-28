import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { getFriends } from "@/app/redux/features/get_friends.slice";
import { TFriend } from "@/app/redux/features/get_friends.slice";
import { UsersInf } from "@/app/redux/features/get_users.slice";
//

// utils
import { FindFriends } from "@/app/utils/FindFriends";
//

interface TMakingFriendsBlock {
  users: UsersInf[];
  friends: TFriend[];
  user: UsersInf;
}

export default function MakingFriendsBlock({
  users,
  friends,
  user
}: TMakingFriendsBlock) {
  const dispatch = useDispatch<AppDispatch>();

  async function AddFriend(friend_id: number, user_id: number) {
    try {
      await axios.post("http://localhost:2000/add_to_friend", {
        user_id: user_id,
        friend_id: friend_id
      });
      dispatch(getFriends(user_id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="border-b-1 border-gray-700 pl-8 pr-3 py-4 mb-3 max-h-80 overflow-auto scrollbar-thumb-gray-700 scrollbar-thin transiton-all duration-200 ease-in">
      <div className="flex flex-col gap-3">
        {users.map((friend, idx) => {
          return (
            <div key={idx} className="flex items-center">
              <div className="w-12 h-12 bg-gray-500 rounded-md relative" />
              <div className="flex flex-col ml-8 gap-1 flex-1">
                <span className="text-sm">
                  {friend.name} {friend.lastname}
                </span>
                <span className="text-xs text-gray-400 font-bold">
                  {friend.email}
                </span>
              </div>
              {FindFriends(friends, friend) ? (
                <button className="px-4 py-2 border-1 rounded-lg text-sm opacity-30">
                  Already friends
                </button>
              ) : (
                <button
                  className="px-4 py-2 border-1 rounded-lg text-sm opacity-30 hover:bg-indigo-500 hover:opacity-100 hover:border-transparent transition-all duration-200 ease-in"
                  onClick={() => AddFriend(friend.id, user.id)}
                >
                  Add
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
