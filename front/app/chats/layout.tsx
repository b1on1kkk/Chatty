"use client";

// components
import LeftAsideMenu from "../components/LeftAsideMenu/LeftAsideMenu";
import ShowLessButton from "../components/LeftAsideMenu/ShowLessButton/ShowLessButton";
//

export default function ChatLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-screen relative">
      <LeftAsideMenu />

      <main className="flex-1 flex flex-col">
        <ShowLessButton />
        {children}
      </main>
    </main>
  );
}
