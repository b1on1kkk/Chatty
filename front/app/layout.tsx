"use client";

import "./globals.css";

// components
import LeftAsideMenu from "./components/LeftAsideMenu/LeftAsideMenu";
import ShowLessButton from "./components/LeftAsideMenu/ShowLessButton/ShowLessButton";
//

// redux
import ReduxProvider from "./redux/provider";
//

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
