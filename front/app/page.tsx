"use client";
import { useState } from "react";

import LeftAsideMenu from "./components/LeftAsideMenu/LeftAsideMenu";

export default function Home() {
  const [hoverCloseButton, setHoverCloseButton] = useState<boolean>(false);
  const [showLess, setShowLess] = useState<boolean>(false);

  return (
    <main className="flex h-screen w-screen relative">
      <LeftAsideMenu showLess={showLess} hoverCloseButton={hoverCloseButton} />

      <main className="flex-1">
        <button
          className="h-[72px] cursor-pointer opacity-40 hover:opacity-80 transition-all duration-200 z-20 w-10 flex items-center justify-center absolute top-[50%]"
          onMouseEnter={() => setHoverCloseButton(!hoverCloseButton)}
          onMouseLeave={() => setHoverCloseButton(!hoverCloseButton)}
          onClick={() => setShowLess(!showLess)}
        >
          <div className="w-1 h-5 bg-white rounded-lg"></div>
        </button>
      </main>
    </main>
  );
}
