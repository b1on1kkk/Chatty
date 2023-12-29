import { SocketPerson } from "../interfaces/interfaces";

export function FindOnlineUser(online_users: SocketPerson[], idx: number) {
  for (let i = 0; i < online_users.length; i++) {
    if (online_users[i].user_id === idx) return true;
  }

  return false;
}
