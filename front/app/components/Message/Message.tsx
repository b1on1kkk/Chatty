import Image from "next/image";

export default function Message({
  message,
  avatar,
  time,
  status
}: {
  message: string;
  avatar: string;
  time: string;
  status: "person" | "our";
}) {
  return (
    <div
      className={`flex flex-col ${
        status === "our" ? "items-end" : ""
      } gap-3 my-2`}
    >
      {status === "our" ? (
        <div className="flex items-end gap-3">
          <div
            className={`w-[40rem] px-10 py-4 bg-gray-800 rounded-l-[60px] rounded-t-[60px]`}
          >
            <span>{message}</span>
          </div>

          <div className="w-8 h-8 bg-[#64c9fe] rounded flex items-center justify-center">
            <Image
              src={`${avatar}`}
              alt="avatar"
              width={30}
              height={30}
              className="bg-cover object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-end gap-3">
          <div className="w-8 h-8 bg-[#64c9fe] rounded flex items-center justify-center">
            <Image
              src={`${avatar}`}
              alt="avatar"
              width={30}
              height={30}
              className="bg-cover object-cover"
            />
          </div>
          <div
            className={`w-[40rem] px-10 py-4 bg-indigo-500 rounded-r-[60px] rounded-t-[60px] text-white`}
          >
            <span>{message}</span>
          </div>
        </div>
      )}

      <div className="text-xs text-[#7f829e]">{time}</div>
    </div>
  );
}
