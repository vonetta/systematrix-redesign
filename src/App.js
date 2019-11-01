import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Products from "./componenets/Products";
import AI from "./componenets/AI";
import Team from "./componenets/Team";
import Contact from "./componenets/Contact";

import Archimedes from "./componenets/products/Archimedes";
import Artemis from "./componenets/products/Artemis";
import AudioFrame from "./componenets/products/AudioFrame";
import Chimera from "./componenets/products/Chimera";
import ClaimAdjudication from "./componenets/products/ClaimAdjudication";
import ClientMdm from "./componenets/products/ClientMdm";
import Demeter from "./componenets/products/Demeter";
import Durga from "./componenets/products/Durga";
import FaceVerify from "./componenets/products/FaceVerify";
import FraudNetwork from "./componenets/products/FraudNetwork";
import Gaia from "./componenets/products/Gaia";
import Guardian from "./componenets/products/Guardian";
import HtNetwork from "./componenets/products/HtNetwork";
import Indra from "./componenets/products/Indra";
import IOT from "./componenets/products/IOT";
import MerchantUnification from "./componenets/products/MerchantUnification";
import Omni from "./componenets/products/Omni";
import PartyNetwork from "./componenets/products/PartyNetwork";
import PredictionEngine from "./componenets/products/PredictionEngine";
import Sprout from "./componenets/products/Sprout";
import VoiceVerify from "./componenets/products/VoiceVerify";
import WireGeoSpatial from "./componenets/products/WireGeoSpatial";
import WireMdm from "./componenets/products/WireMdm";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>

        {/* products */}
        <Route path="/archimedes">
          <Archimedes />
        </Route>
        <Route path="/artemis">
          <Artemis />
        </Route>
        <Route path="/audioFrame">
          <AudioFrame />
        </Route>
        <Route path="/chimera">
          <Chimera />
        </Route>
        <Route path="/claimAdjudication">
          <ClaimAdjudication />
        </Route>
        <Route path="/clientMdm">
          <ClientMdm />
        </Route>
        <Route path="/demeter">
          <Demeter />
        </Route>
        <Route path="/durga">
          <Durga />
        </Route>
        <Route path="/faceVerify">
          <FaceVerify />
        </Route>
        <Route path="/fraudNetwork">
          <FraudNetwork />
        </Route>
        <Route path="/gaia">
          <Gaia />
        </Route>
        <Route path="/guardian">
          <Guardian />
        </Route>
        <Route path="/htNetwork">
          <HtNetwork />
        </Route>
        <Route path="/indra">
          <Indra />
        </Route>
        <Route path="/iot">
          <IOT />
        </Route>
        <Route path="/merchantUnification">
          <MerchantUnification />
        </Route>
        <Route path="/omni">
          <Omni />
        </Route>
        <Route path="/partyNetwork">
          <PartyNetwork />
        </Route>
        <Route path="/predictionEngine">
          <PredictionEngine />
        </Route>
        <Route path="/sprout">
          <Sprout />
        </Route>
        <Route path="/voiceVerify">
          <VoiceVerify />
        </Route>
        <Route path="/wireGeoSpatial">
          <WireGeoSpatial />
        </Route>
        <Route path="/wireMdm">
          <WireMdm />
        </Route>

        {/* products */}

        <Route path="/ai">
          <AI />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
