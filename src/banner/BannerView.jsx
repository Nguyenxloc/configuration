import React from "react";
import { useState } from "react";
import Content from "./Content";
import MeetAAITeleBtn from "./MeetAAITeleBtn";
import GreetingTxtArea from "./GreetingTxtArea";

export default function BannerView() {
    const [data, setData] = useState([]);
    return (
        <div className="video-container">
            <video autoPlay muted loop>
                <source src="https://autoair.xyz/video/bg2.mp4" type="video/mp4" />
            </video>
            <div className="mt-[100px]" style={{ border: "solid red  1px" }}>
                <Content />
            </div>
            <div className="ms-[300px] mt-[100px]" style={{ border: "solid red 1px" }}>
                <MeetAAITeleBtn />
            </div>
            <div className="mt-[100px]">
                <GreetingTxtArea />
            </div>
        </div>
    );
}