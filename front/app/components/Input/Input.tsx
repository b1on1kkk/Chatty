"use client";

import { useState } from "react";
import Icon from "../Icon/Icon";
import { Send } from "lucide-react";

interface TInput {
  left_icon_name: string;
  text_size: string;
  show_send_icon: boolean;
  placeholder: string;
  focus_status: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, msg: string) => void;
}

export default function Input({
  left_icon_name,
  text_size,
  show_send_icon,
  placeholder,
  focus_status,
  onFocus,
  onBlur,
  onSubmit
}: TInput) {
  const [text, setText] = useState<string>("");

  return (
    <div
      className={`bg-black flex rounded-full items-center ${
        show_send_icon ? "gap-4 pl-5 pr-2 py-2" : "px-3 py-3 mt-10"
      } border ${
        focus_status
          ? "border-indigo-500 shadow-indigo-500 shadow-sm"
          : "border-black"
      } transition-all duration-200 ease-in`}
    >
      <Icon icon_name={left_icon_name} />
      <form
        className="flex w-full"
        onSubmit={(e) => {
          onSubmit(e, text);
          setText("");
        }}
      >
        <input
          type="text"
          className={`focus:outline-none bg-black ml-2 w-full placeholder:${text_size} ${text_size} placeholder:text-placeholder_color placeholder:font-semibold ${
            show_send_icon ? "flex-1" : ""
          }`}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        {show_send_icon && (
          <button
            className={`p-send_icon bg-[#0e1119] rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white text-placeholder_color transition-all duration-200 ease-in ${
              focus_status ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <Send />
          </button>
        )}
      </form>
    </div>
  );
}
