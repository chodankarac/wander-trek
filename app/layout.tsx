"use client";
import { store } from "@/rtk/store";
import "@/app/globals.css";
import { Provider } from "react-redux";
import AppHeader from "@/components/organism/Header/AppHeader";

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <AppHeader />
          {children}
        </body>
      </html>
    </Provider>
  );
}
