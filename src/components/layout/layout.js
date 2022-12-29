import React from "react";
import { GlobalStyle } from "../styles/GlobleStyle";
import Header from "./Header";
import "./layout.css";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
