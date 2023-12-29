import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";

import {
  setShowLess,
  setHoverCloseButton
} from "@/app/redux/features/left_aside_service.slice";

export default function ShowLessButton() {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.aside_menu_service);

  return (
    <button
      className="h-[72px] cursor-pointer opacity-40 hover:opacity-80 transition-all duration-200 z-20 w-10 flex items-center justify-center absolute top-[50%]"
      onMouseEnter={() =>
        dispatch(setHoverCloseButton(!state.hoverCloseButton))
      }
      onMouseLeave={() =>
        dispatch(setHoverCloseButton(!state.hoverCloseButton))
      }
      onClick={() => {
        dispatch(setShowLess(!state.showLess));
      }}
    >
      <div className="w-1 h-5 bg-white rounded-lg"></div>
    </button>
  );
}
