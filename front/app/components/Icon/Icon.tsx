import { icons } from "lucide-react";

export default function Icon({
  icon_name,
  onClick
}: {
  icon_name: string;
  onClick?: () => void;
}) {
  const Icon = icons[icon_name as keyof typeof icons];

  return (
    <span
      className="text-icons_color hover:text-indigo-500 transition-all duration-200 ease-in"
      onClick={onClick}
    >
      <Icon width={23} height={23} />
    </span>
  );
}
