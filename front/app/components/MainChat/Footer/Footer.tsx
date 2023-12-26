import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";

import Input from "../../Input/Input";

import { setEnterMessageInputFocus } from "@/app/redux/features/left_aside_service.slice";

export default function Footer() {
  const state = useSelector((state: RootState) => state.aside_menu_service);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <footer className="p-8">
      <Input
        left_icon_name="Plus"
        text_size="text-base"
        show_send_icon={true}
        placeholder="Type your message..."
        onFocus={() =>
          dispatch(setEnterMessageInputFocus(!state.enterMessageInputFocus))
        }
        onBlur={() =>
          dispatch(setEnterMessageInputFocus(!state.enterMessageInputFocus))
        }
        focus_status={state.enterMessageInputFocus}
      />
    </footer>
  );
}
