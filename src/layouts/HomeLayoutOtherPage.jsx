import React, { useEffect } from "react";
import HeaderOtherPage from "../components/HeaderGroupOtherPage/HeaderOtherPage";

export default function HomeLayout({ children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <HeaderOtherPage />
      {children}
    </div>
  );
}
