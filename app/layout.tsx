"use client";
import { store } from "@/rtk/store";
import "@/app/globals.css";
import { Provider } from "react-redux";
import AppHeader from "@/components/organism/Header/AppHeader";
import { Box } from "@mui/material";

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <AppHeader />
          <main style={{ paddingTop: "10px" }}>{children}</main>
        </body>
      </html>
    </Provider>
  );
}
