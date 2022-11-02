import React from "react";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Innovation from "../components/Inovation/Innovation";
import IntroFeature from "../components/IntroFeature/IntroFeature";
import PoolParty from "../components/PoolParty/PoolParty";
import { PoolPartyWrapper } from "../components/PoolParty/styled";
import PreOrder from "../components/PreOrder/PreOrder";
import Recap from "../components/Recap/Recap";
import Referral from "../components/Referral/Referral";
import Reward from "../components/Reward/Reward";
import SecuritySolutions from "../components/SecuritySolutions/SecuritySolutions";
import Trailer from "../components/Trailer/Trailer";
import { Container } from "./styled";

export default function Landing() {
  return (
    <Container>
      <Header />
      <Feature />
      <Reward />
      <Trailer />
      <Referral />
      <SecuritySolutions />
      <Innovation />
      <Recap />
      <IntroFeature />
      <PoolParty />
      <PreOrder />
      <Footer />
    </Container>
  );
}
