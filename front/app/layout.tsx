"use client";

import axios from "axios";
import "./globals.css";

// redux
import ReduxProvider from "./redux/provider";
//

axios.defaults.withCredentials = true;

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
