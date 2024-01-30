import React, { ReactNode } from "react";
import AppHeader from "../organism/Header/AppHeader";

type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppHeader />
      <main style={{ minHeight: "calc(100vh)" }}>{children}</main>
    </>
  );
}

export default Layout;
