import React from "react";

export default function CardChainLst() {
    return (
        <div className="w-[860px] h-[400px] font-medium">
            <div className="w-[860px] h-[400px] text-[80px] font-medium">
                <div>
                    Your Airdrop Automated
                    <br />by
                    <div className="w-[335px] h-[68px] rounded-[12px] p-[12px] flex bg-black">
                        <img src="https://autoair.xyz/logo/logo-white.svg" width={65} height={39} alt="" />
                        <p className="text-[56px] text-white text-center">AutoAir AI</p>
                    </div>
                </div>
            </div>
            <p className="text-gray9 text-[24px] w-[600px] text-center">
                AutoAir executes a variety of automated tasks across various protocols, operating on different chains.
            </p>
        </div>
    )
}