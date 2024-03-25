import MeetAAITeleBtn from "banner/MeetAAITeleBtn";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Footer() {
    return (
        <div className="w-[1156px] h-[856px] bg-black mt-[40px]">
            <div className="flex justify-center">
                <Marquee className="gap-[80px]" speed={130}>
                    <p className="text-[80px] text-white">
                    Meet AutoAir AI &nbsp;&nbsp;&nbsp; Meet AutoAir AI &nbsp;&nbsp;&nbsp; Meet AutoAir AI &nbsp;&nbsp;&nbsp; Meet AutoAir AI 
                    </p>
                </Marquee>
            </div>
            <div className="flex justify-center mt-[90px]">
                <MeetAAITeleBtn />
            </div>
            <div className="flex mt-[200px] ms-[30px]">
                <div className="w-[360px] h-[220px] mt-[145px]" style={{border:"solid red 1px"}}>
                    <div>
                    </div>
                    <p className="font-medium">Legal</p>
                    <div className="flex gap-[48px]">
                        <a className="text-[20px] text-medium text-white no-underline" href="">Term and service</a>
                        <a className="text-[20px] text-medium text-white no-underline" href="">Privacy policy</a>
                    </div>
                    <p className="text-[32px] leading-[40px] text-gray15 mt-[80px]">2024, All Rights Reserved</p>
                </div>
                <div className="w-[366px] h-[366px]" style={{ border: "1px solid red" }}>
                    <div className="rounded-full h-[366px] border border-gray15">
                        <img className="ms-[130px] mt-[70px]" src="https://autoair.xyz/icon/up.svg" alt="" />
                        <p className="text-[32px] font-medium text-gray14 leading-[40px] ms-[100px] mt-[40px]">Back to top</p>
                    </div>
                </div>
                <div className="w-[210px] h-[232px] mt-[135px]" style={{ border: "1px solid red" }}>
                    <p className="text-right text-medium">About us</p>
                    <div className="flex flex-row-reverse gap-[48px]">
                        <a className="text-[20px] text-white no-underline" href="">Blog</a>
                        <a className="text-[20px] text-white no-underline" href="">GitBook</a>
                    </div>
                    <p className="text-right text-medium mt-[90px]">Social</p>
                    <div className="flex flex-row-reverse gap-[48px]">
                        <a className="text-[20px] text-white no-underline" href="">Twitter X</a>
                        <a className="text-[20px] text-white no-underline" href="">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}