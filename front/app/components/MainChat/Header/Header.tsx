import AvatarAndRole from "../../LeftAsideMenu/AvatarAndRole/AvatarAndRole";
import Icon from "../../Icon/Icon";

export default function Header({
  name,
  lastname,
  role
}: {
  name: string;
  lastname: string;
  role: string;
}) {
  return (
    <header className="h-24 flex items-center px-8 shadow-lg shadow-indigo-500/5">
      <AvatarAndRole name={`${name} ${lastname}`} role={role} />
      <div className="flex gap-8">
        <Icon icon_name="Phone" />
      </div>
    </header>
  );
}
