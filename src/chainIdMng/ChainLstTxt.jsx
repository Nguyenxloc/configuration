import React from "react";

export default function ChainLstTxt() {
    return (
        <div className="font-medium">
            <div className="text-[80px] font-medium">
                <div>
                    <p>Your Airdrop Automated</p> 
                    <div className="flex justify-center">
                    <span>By</span>
                    <div className="w-[335px] h-[68px] rounded-[12px] p-[12px] flex bg-black">
                        <img src="https://autoair.xyz/logo/logo-white.svg" width={65} height={39} alt="" />
                        <span className="text-[56px] text-white text-center">AutoAir AI</span>
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