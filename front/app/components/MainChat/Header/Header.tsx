import AvatarAndRole from "../../LeftAsideMenu/AvatarAndRole/AvatarAndRole";
import Icon from "../../Icon/Icon";

export default function Header() {
  return (
    <header className="h-24 flex items-center px-8 shadow-lg shadow-indigo-500/5">
      <AvatarAndRole name="Dushane Daniel" role="Project manager" />
      <div className="flex gap-8">
        <Icon icon_name="Phone" />
        <Icon icon_name="UserPlus" />
      </div>
    </header>
  );
}
