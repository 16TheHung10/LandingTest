import React, { useEffect } from "react";
import Header from "../components/Header/Header";
// import HeaderThree from "../components/HeaderThree/HeaderThree";

export default function HomeLayout({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Header />
      <div style={{ height: "100vh" }}>{children}</div>
      {/* {children} */}
    </div>
  );
}
