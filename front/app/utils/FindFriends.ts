import { TFriend } from "../redux/features/get_friends.slice";
import { UsersInf } from "../redux/features/get_users.slice";

export function FindFriends(friends: TFriend[], user: UsersInf) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].friend_id === user.id) return true;
  }
  return false;
}
