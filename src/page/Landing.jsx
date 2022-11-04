import React, { useEffect, useRef, useState } from "react";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Innovation from "../components/Inovation/Innovation";
import IntroFeature from "../components/IntroFeature/IntroFeature";
import PoolParty from "../components/PoolParty/PoolParty";
import { PoolPartyWrapper } from "../components/PoolParty/styled";
import PreOrder from "../components/PreOrder/PreOrder";
import Referral from "../components/Referral/Referral";
import Reward from "../components/Reward/Reward";
import SecuritySolutions from "../components/SecuritySolutions/SecuritySolutions";
import Trailer from "../components/Trailer/Trailer";
import { Container } from "./styled";
import PreInstall from "../components/PreInstall/PreInstall";
import HeaderTwo from "../components/HeaderTwo/HeaderTwo";
import CardRecap from "../components/IntroFeature/Card/Card";

export default function Landing() {
  const [isChangeHeader, setIsChangeHeader] = useState();
  const preOrderRef = useRef();
  const prInstallRef = useRef();
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
      {isChangeHeader ? <HeaderTwo /> : <Header />}
      <Feature />
      <Reward />
      <Trailer />
      <Referral />
      <SecuritySolutions />
      <Innovation />
      <PreInstall ref={prInstallRef} />
      <IntroFeature />
      {/* <CardRecap /> */}
      <PoolParty />
      <PreOrder ref={preOrderRef} />
      <Footer />
    </Container>
  );
}
