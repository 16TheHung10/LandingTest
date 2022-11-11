import React, { useEffect, useRef, useState } from "react";

import Header from "../components/Header/Header";

import { Container } from "./styled";

import Brand from "../components/Brand/Brand";
import Roadmap from "../components/Roadmap/Roadmap";
import Partner from "../components/Partner/Partner";
import Footer from "../components/Footer/Footer";
import Video from "../components/Video/Video";
import PoolsPhone from "../components/PoolsPhone/PoolsPhone";
import Contribution from "../components/Contribution/Contribution";

export default function BrandStory() {
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
      <Brand />
      <Contribution/>
      <Video/>
      <PoolsPhone/>
      <Roadmap/>
      <Partner/>
      <Footer/>
    </Container>
  );
}
