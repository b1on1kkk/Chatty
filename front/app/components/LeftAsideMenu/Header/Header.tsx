import Icon from "../../Icon/Icon";
import Input from "../../Input/Input";
import AvatarAndRole from "../AvatarAndRole/AvatarAndRole";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";

import { setSearchInputFocus } from "@/app/redux/features/left_aside_service.slice";

export default function Header({ showLess }: { showLess: boolean }) {
  const state = useSelector((state: RootState) => state.aside_menu_service);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header
      className={`px-8 py-7 min-h-48 flex flex-col ${
        showLess ? "justify-between" : ""
      }`}
    >
      <div className="flex items-center w-350">
        <AvatarAndRole name="Jordan Ntolo" role="Project Manager" />
        {!showLess && (
          <div>
            <Icon icon_name="Settings" />
          </div>
        )}
      </div>
      {!showLess && (
        <div>
          <Input
            left_icon_name="Search"
            text_size="text-base"
            show_send_icon={false}
            placeholder="Search"
            onFocus={() =>
              dispatch(setSearchInputFocus(!state.searchInputFocus))
            }
            onBlur={() =>
              dispatch(setSearchInputFocus(!state.searchInputFocus))
            }
            focus_status={state.searchInputFocus}
          />
        </div>
      )}
      {showLess && (
        <div className="flex items-center flex-col gap-5">
          <Icon icon_name="Settings" />
          <Icon icon_name="Search" />
        </div>
      )}
    </header>
  );
}
