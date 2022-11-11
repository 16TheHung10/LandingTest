import React, { useEffect, useRef, useState } from "react";

import Header from "../components/Header/Header";

import { Container } from "./styled";

import Footer from "../components/Footer/Footer";
import PreOrder from "../components/PreOrder/PreOrder";
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
      {isChangeHeader ? <Header /> : <Header />}
      <Home />
      <Smartphone />
      <Project />
      <Donation />
      <Lifestyle />
      <EarnPhone />
      <Referral />
      <AppStore />
      <Smarter />
      <PoolsId />
      <Wallet />
      <CardPayment />
      <OpenMarket />
      <Enjoy />
      <Camera />
      <Marketplace />
      <PoolParty />
      <Development />
      <PhoneMaker />
      <Benefits />
      <Table />
      <PreOrder />
      <Footer />
    </Container>
  );
}
