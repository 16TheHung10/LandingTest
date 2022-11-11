import React, { useEffect, useRef, useState } from "react";

import Header from "../components/Header/Header";

import { Container } from "./styled";

import Download from "../components/Download/Download";

export default function DownloadPage() {
  const [isChangeHeader, setIsChangeHeader] = useState();

  const watchScroll = () => {
    if (window.scrollY >= 300) {
      setIsChangeHeader(true);
    } else {
      setIsChangeHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", watchScroll);
    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, []);

  return (
    <Container>
      {isChangeHeader ? <Header /> : <Header />}
      <Download />
    </Container>
  );
}
