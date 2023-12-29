import { SocketPerson } from "../interfaces/interfaces";
import { UsersInf } from "../redux/features/get_user.slice";

export function IsOnline(
  chat_id: number,
  online_users: SocketPerson[],
  users: UsersInf[]
): [
  string | undefined,
  string | undefined,
  string | undefined,
  string | undefined,
  number
] {
  const idx = online_users.findIndex((user) => user.user_id === chat_id);
  const user = users.find((user) => user.id === chat_id);

  return [user?.name, user?.lastname, user?.role, user?.avatar, idx];
}
