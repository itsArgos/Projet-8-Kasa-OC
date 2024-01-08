import React from "react";
import "./mainWidth.css";

export function MainWidth({ children }) {
  return <main className="main_width">{...children}</main>;
}
