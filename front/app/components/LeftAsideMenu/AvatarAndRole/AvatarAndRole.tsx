import Image from "next/image";

interface AvatarAndRole {
  name: string;
  role: string;
  avatar: string;
  status: boolean;
}

export default function AvatarAndRole({
  name,
  role,
  status,
  avatar
}: AvatarAndRole) {
  return (
    <>
      <div className="w-12 h-12 bg-[#64c9fe] rounded-md relative flex items-center justify-center">
        <Image
          src={avatar}
          alt="avatar"
          width={50}
          height={50}
          className="bg-cover object-cover mb-1"
        />
        <div className="w-4 h-4 bg-gray-800 rounded-full absolute right-0 bottom-0 top-7 left-10 flex items-center justify-center">
          {status ? (
            <>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute" />
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </>
          ) : (
            <div className="w-2 h-2 bg-red-500 rounded-full" />
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 ml-8 gap-1">
        <h2 className="font-medium">{name}</h2>
        <span className="text-xs text-indigo-500">{role}</span>
      </div>
    </>
  );
}
