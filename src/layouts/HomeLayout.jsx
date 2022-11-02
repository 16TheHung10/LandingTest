import React, { useEffect } from "react";
import Header from "../components/Header/Header";

export default function HomeLayout({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
