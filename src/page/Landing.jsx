import React, { useEffect, useRef, useState } from "react";

import Header from "../components/Header/Header";
import HeaderTwo from "../components/HeaderTwo/HeaderTwo";

import { Container } from "./styled";

import Footer from "../components/Footer/Footer";
import PreOrder from "../components/PreOrder/PreOrder";
import ReadyToStart from "../components/ReadyToStart/ReadyToStart";
import News from "../components/News/News";
import Partner from "../components/Partner/Partner";
import Roadmap from "../components/Roadmap/Roadmap";
import PoolsPhone from "../components/PoolsPhone/PoolsPhone";
// import Video from "../components/Video/Video";
import PoolParty from "../components/Consume/Consume";
import Marketplace from "../components/Marketplace/Marketplace";
import Camera from "../components/Camera/Camera";
import OpenMarket from "../components/OpenMarket/OpenMarket";
import CardPayment from "../components/CardPayment/CardPayment";
import Wallet from "../components/Wallet/Wallet";
import Smarter from "../components/Smarter/Smarter";
import AppStore from "../components/AppStore/AppStore";
import Referral from "../components/Referral/Referral";
import EarnPhone from "../components/EarnPhone/EarnPhone";
import Donation from "../components/Donation/Donation";
import Project from "../components/Project/Project";
import Home from "../components/Home/Home";
import Download from "../components/Download/Download";
import Brand from "../components/Brand/Brand";
import Smartphone from "../components/Smartphone/Smartphone";
import Lifestyle from "../components/Lifestyle/Lifestyle";
import PoolsId from "../components/PoolsId/PoolsId";
import Enjoy from "../components/Enjoy/Enjoy";
import PhoneMaker from "../components/PhoneMaker/PhoneMaker";
import Benefits from "../components/Benefits/Benefits";
import Table from "../components/Table/Table";
import Development from "../components/Development/Development";

export default function Landing() {
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
      {/* <Download/> */}
      {/* <Brand/> */}

      {isChangeHeader ? <HeaderTwo /> : <Header />}
      <Home />
      <Smartphone/>
      <Project/>
      <Donation/>
      <Lifestyle/>
      <EarnPhone/>
      <Referral />
      <AppStore/>
      <Smarter />
      <PoolsId/>
      <Wallet />
      <CardPayment />
      <OpenMarket />
      <Enjoy/>
      <Camera />
      <Marketplace />
      <PhoneMaker/>
      <Benefits/>
      <Table/>
      <PoolParty />
      <Development/>
      {/* <Video /> */}
      {/* <PoolsPhone /> */}
      {/* <Roadmap /> */}
      {/* <Partner /> */}
      {/* <News /> */}
      <ReadyToStart />
      <PreOrder />
      <Footer />
    </Container>
  );
}
