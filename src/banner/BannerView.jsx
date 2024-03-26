import React from "react";
import { useState } from "react";
import Content from "./Content";
import MeetAAITeleBtn from "./MeetAAITeleBtn";
import GreetingTxtArea from "./GreetingTxtArea";
import Navbar from "header/Navbar";

export default function BannerView() {
    const [data, setData] = useState([]);
    return (
        <div className="video-container" style={{border:"solid red 1px"}}>
            <video autoPlay muted loop>
                <source src="https://autoair.xyz/video/bg2.mp4" type="video/mp4" />
            </video>
            <div className="ms-5 flex justify-center">
                <Navbar/>
            </div>
            <div className="mt-[100px] flex justify-center" style={{ border: "solid red  1px" }}>
                <Content />
            </div>
            <div className="mt-[100px] flex justify-center" style={{ border: "solid red 1px" }}>
                <MeetAAITeleBtn />
            </div>
            <div className="mt-[185px]">
                <GreetingTxtArea />
            </div>
        </div>
    );
}