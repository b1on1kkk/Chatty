import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import ChatCard from "../ChatCard/ChatCard";

export default function LeftAsideMenu({
  showLess,
  hoverCloseButton
}: {
  showLess: boolean;
  hoverCloseButton: boolean;
}) {
  const fakeArray = new Array(3).fill(0);

  return (
    <aside
      className={`flex flex-col left-0 top-0 z-10 overflow-hidden ${
        showLess ? " w-110" : "w-420"
      } bg-gray-800 h-full ${
        hoverCloseButton ? "opacity-50" : ""
      } transition-all duration-200`}
    >
      <header className="px-8 py-7 min-h-48">
        <div className="flex items-center w-350">
          <div className="w-12 h-12 bg-gray-500 rounded-md relative">
            <div className="w-4 h-4 bg-gray-800 rounded-full absolute right-0 bottom-0 top-7 left-10 flex items-center justify-center">
              {/* turn on animation later */}
              {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute" /> */}
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col flex-1 ml-8 gap-1">
            <h2 className="font-medium">Jordan Ntolo</h2>
            <span className="text-xs text-blue-500">Project Manager</span>
          </div>
          <div>
            <Icon icon_name="Settings" color="#7f829e" width={23} height={23} />
          </div>
        </div>
        {!showLess && (
          <div>
            <Input />
          </div>
        )}
      </header>
      <main className="overflow-auto pl-4 flex-1 w-420">
        {fakeArray.map((_, idx) => {
          return <ChatCard key={idx} />;
        })}
      </main>
    </aside>
  );
}
