"use client";

import { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import { setSearchInputFocus } from "@/app/redux/features/left_aside_service.slice";
import { getUsers } from "@/app/redux/features/get_users.slice";
import { setAddingFriends } from "@/app/redux/features/left_aside_service.slice";
import { getUser } from "@/app/redux/features/get_user.slice";
//

// components
import Icon from "../../Icon/Icon";
import Input from "../../Input/Input";
import AvatarAndRole from "../AvatarAndRole/AvatarAndRole";
//

export default function Header({ showLess }: { showLess: boolean }) {
  const state = useSelector((state: RootState) => state.aside_menu_service);
  const user = useSelector((state: RootState) => state.get_user.user);
  const dispatch = useDispatch<AppDispatch>();

  function getUsersByClick() {
    if (state.addingFriends) {
      dispatch(setAddingFriends(!state.addingFriends));
      return;
    }
    dispatch(getUsers());
    dispatch(setAddingFriends(!state.addingFriends));
  }

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <header
      className={`px-8 py-7 min-h-48 flex flex-col ${
        showLess ? "justify-between" : ""
      }`}
    >
      <div className="flex items-center w-350">
        <AvatarAndRole
          name={`${user.name} ${user.lastname}`}
          role={`${user.role}`}
        />
        {!showLess && (
          <div className="flex gap-3">
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
            focus_status={state.searchInputFocus}
            onFocus={() =>
              dispatch(setSearchInputFocus(!state.searchInputFocus))
            }
            onBlur={() =>
              dispatch(setSearchInputFocus(!state.searchInputFocus))
            }
            getUsers={getUsersByClick}
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
