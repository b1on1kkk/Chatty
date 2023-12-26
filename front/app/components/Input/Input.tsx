import Icon from "../Icon/Icon";

export default function Input() {
  return (
    <div className="px-3 py-3 bg-black flex rounded-full mt-10 items-center">
      <div>
        <Icon color="#2c2d3c" icon_name="Search" width={23} height={23} />
      </div>
      <input
        type="text"
        className="focus:outline-none bg-black ml-2 w-full placeholder:text-base text-base placeholder:text-[#2c2d3c] placeholder:font-semibold"
        placeholder="Search"
      />
    </div>
  );
}
