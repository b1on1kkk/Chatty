import { icons } from "lucide-react";

export default function Icon({
  icon_name,
  color,
  width,
  height
}: {
  icon_name: string;
  color: string;
  width: number;
  height: number;
}) {
  const Icon = icons[icon_name as keyof typeof icons];

  return <Icon color={color} width={width} height={height} />;
}
