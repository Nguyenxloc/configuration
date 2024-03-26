
import AutoAirAIFeature from "autoAirAIFeatures/AutoAirAIFeature";
import AutoAirServiceMobile from "autoAirService/AutoAirServiceMobile";
import BannerView from "banner/BannerView";
import Content from "banner/Content";
import GreetingTxtArea from "banner/GreetingTxtArea";
import MeetAAITeleBtn from "banner/MeetAAITeleBtn";
import CardChainLst from "chainIdMng/CardChainLst";
import ChainIDMngTxt from "chainIdMng/ChainIDMngTxt";
import Footer from "footer/Footer";
import Navbar from "header/Navbar";
import PopupBanner from "popupBanner/PopupBanner";
import React, { Component } from "react";
import SimplifyAirdrop from "simplifyAirdropJourney/SimplifyAirdrop";
import RoadMapTime from "technicalRoadmap/RoadMapTime";
import RoadMapTree from "technicalRoadmap/RoadMapTree";
import TokenomicsView from "tokenomics/TokenomicsView";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="justify-center">
            <BannerView/>
            <AutoAirServiceMobile/>
            <SimplifyAirdrop/>
            <TokenomicsView/>
            <AutoAirAIFeature />
            <RoadMapTree/>
            <RoadMapTime/>
            <Footer/>
        </div>
        {/* <div className="flex bg-white justify-center ms-[30px]">
            <RoadMapTime/>
        </div> */}
      </div>
    );
  }
}
