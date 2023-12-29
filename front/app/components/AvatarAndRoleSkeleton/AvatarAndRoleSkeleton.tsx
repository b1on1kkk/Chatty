export default function AvatarAndRoleSkeleton() {
  return (
    <>
      <div className="w-12 h-12 bg-gray-500 rounded-md relative flex items-center justify-center animate-pulse">
        <div className="w-4 h-4 bg-gray-800 rounded-full absolute right-0 bottom-0 top-7 left-10 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-600 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col flex-1 ml-8 gap-1 animate-pulse">
        <h2 className="w-36 h-3 bg-gray-500 rounded-sm"></h2>
        <span className="w-24 h-2 bg-gray-500 rounded-sm"></span>
      </div>
    </>
  );
}
