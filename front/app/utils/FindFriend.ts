import { TFriend } from "../redux/features/get_friends.slice";

export function FindFriend(friends: TFriend[], chosen_user_id_chat: string) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].friend_id.toString() === chosen_user_id_chat) {
      return friends[i];
    }
  }

  return null;
}
