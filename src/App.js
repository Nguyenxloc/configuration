
import AutoAirServiceMobile from "autoAirService/AutoAirServiceMobile";
import BannerView from "banner/BannerView";
import Content from "banner/Content";
import GreetingTxtArea from "banner/GreetingTxtArea";
import MeetAAITeleBtn from "banner/MeetAAITeleBtn";
import Navbar from "header/Navbar";
import PopupBanner from "popupBanner/PopupBanner";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex flex-row w-[1000px] h-[1000px] bg-black">
            <PopupBanner/>
        </div>
      </div>
    );
  }
}
