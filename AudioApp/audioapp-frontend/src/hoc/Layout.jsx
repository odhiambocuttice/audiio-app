import React from "react";
// import { About } from "../components/about/About";
import { TopBar } from "../components/TopBar";

export const Layout = (props) => {
  return (
    <div>
      <div style={{ marginBottom: 0 }}>
        <TopBar />
      </div>
      {props.children}
      {/* <About /> */}
    </div>
  );
};
