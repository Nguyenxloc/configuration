import React from "react";
import { useState } from "react";
import Content from "./Content";
import MeetAAITeleBtn from "./MeetAAITeleBtn";
import GreetingTxtArea from "./GreetingTxtArea";
import Navbar from "header/Navbar";

export default function BannerView() {
    const [data, setData] = useState([]);
    return (
        <div className="video-container">
            <video autoPlay muted loop>
                <source src="https://autoair.xyz/video/bg2.mp4" type="video/mp4" />
            </video>
            <div className="mt-[100px] flex justify-center">
                <Content />
            </div>
            <div className="mt-[100px] flex justify-center">
                <MeetAAITeleBtn />
            </div>
            <div className="mt-[215px]">
                <GreetingTxtArea />
            </div>
        </div>
    );
}