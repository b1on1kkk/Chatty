import { UsersInf } from "../redux/features/get_user.slice";

export function FindUserChatWith(users: UsersInf[], chat_id: number) {
  return users.find((user) => user.id === chat_id);
}
