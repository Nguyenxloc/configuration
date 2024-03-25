
import AutoAirServiceMobile from "autoAirService/AutoAirServiceMobile";
import BannerView from "banner/BannerView";
import Content from "banner/Content";
import GreetingTxtArea from "banner/GreetingTxtArea";
import MeetAAITeleBtn from "banner/MeetAAITeleBtn";
import CardChainLst from "chainIdMng/CardChainLst";
import Navbar from "header/Navbar";
import PopupBanner from "popupBanner/PopupBanner";
import React, { Component } from "react";
import SimplifyAirdrop from "simplifyAirdropJourney/SimplifyAirdrop";
import TokenomicsView from "tokenomics/TokenomicsView";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="w-[1000px] h-[1000px] justify-center">
            <BannerView/>
            <AutoAirServiceMobile/>
            <SimplifyAirdrop/>
            <TokenomicsView/>
        </div>
      </div>
    );
  }
}
