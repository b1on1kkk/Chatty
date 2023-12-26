import { icons } from "lucide-react";

export default function Icon({ icon_name }: { icon_name: string }) {
  const Icon = icons[icon_name as keyof typeof icons];

  return (
    <span className="text-icons_color hover:text-indigo-500 transition-all duration-200 ease-in">
      <Icon width={23} height={23} />
    </span>
  );
}
