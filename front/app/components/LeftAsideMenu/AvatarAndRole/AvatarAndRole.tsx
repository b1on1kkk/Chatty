interface AvatarAndRole {
  name: string;
  role: string;
}

export default function AvatarAndRole({ name, role }: AvatarAndRole) {
  return (
    <>
      <div className="w-12 h-12 bg-gray-500 rounded-md relative">
        <div className="w-4 h-4 bg-gray-800 rounded-full absolute right-0 bottom-0 top-7 left-10 flex items-center justify-center">
          {/* turn on animation later */}
          {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute" /> */}
          <div className="w-2 h-2 bg-green-400 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col flex-1 ml-8 gap-1">
        <h2 className="font-medium">{name}</h2>
        <span className="text-xs text-indigo-500">{role}</span>
      </div>
    </>
  );
}
