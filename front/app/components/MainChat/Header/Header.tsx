// components
import AvatarAndRole from "../../LeftAsideMenu/AvatarAndRole/AvatarAndRole";
import Icon from "../../Icon/Icon";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

// utils
import { IsOnline } from "@/app/utils/IsOnline";

// interfaces
import { SocketPerson } from "@/app/interfaces/interfaces";

export default function Header({
  onlineUsers
}: {
  onlineUsers: SocketPerson[];
}) {
  const users = useSelector((state: RootState) => state.get_users_chats.users);
  const chat_id = useSelector(
    (state: RootState) => state.aside_menu_service.chosenChat
  );

  const [name, lastname, role, avatar, idx] = IsOnline(
    chat_id,
    onlineUsers,
    users
  );

  return (
    <header className="h-24 flex items-center px-8 shadow-lg shadow-indigo-500/5">
      <AvatarAndRole
        name={`${name} ${lastname}`}
        role={`${role}`}
        status={idx !== -1 ? true : false}
        avatar={`${avatar}`}
      />
      <div className="flex gap-8">
        <Icon icon_name="Phone" />
      </div>
    </header>
  );
}
