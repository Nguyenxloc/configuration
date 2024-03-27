
import AutoAirAIFeature from "autoAirAIFeatures/AutoAirAIFeature";
import AutoAirServiceDesktop from "autoAirService/AutoAirServiceDesktop";
import AutoAirServiceMobile from "autoAirService/AutoAirServiceMobile";
import BannerView from "banner/BannerView";
import Content from "banner/Content";
import GreetingTxtArea from "banner/GreetingTxtArea";
import MeetAAITeleBtn from "banner/MeetAAITeleBtn";
import CardChainLst from "chainIdMng/CardChainLst";
import ChainLstTxt from "chainIdMng/ChainLstTxt";
import ChainLstView from "chainIdMng/ChainLstView";
import SideBarChainLst from "chainIdMng/SideBarChainLst";
import FaqsView from "faqs/FaqsView";
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
            <ChainLstView/>
            <AutoAirServiceDesktop/>
            <SimplifyAirdrop/>
            <TokenomicsView/>
            <AutoAirAIFeature />
            <RoadMapTree/>
            <RoadMapTime/>
            <FaqsView/>
            <Footer/>
        </div>
        {/* <div className="flex bg-[#f2f2f2] justify-center ms-[30px] h-fit">
             <ChainLstView/>
        </div> */}
      </div>
    );
  }
}
