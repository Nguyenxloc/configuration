import React from "react";

export default function ChainLstTxt() {
    return (
        <div className="font-medium">
            <div className="text-[80px] font-medium">
                <div>
                    <p>Your Airdrop Automated</p> 
                    <div className="flex justify-center">
                    <span>By</span>
                    <div className="w-[335px] h-[68px] inline-flex rounded-[12px] px-[5px] bg-black">
                        <img src="https://autoair.xyz/logo/logo-white.svg" width={65} height={39} alt="" />
                        <p className="text-[45px] text-white text-center" style={{border:"1px solid red"}}>AutoAir AI</p>
                    </div>
                    </div> 
                </div>
            </div>
            <div className="flex justify-center"> 
            <p className="text-gray9 text-[24px] w-[600px] text-center">
                AutoAir executes a variety of automated tasks across various protocols, operating on different chains.
            </p>
            </div>
        </div>
    )
}