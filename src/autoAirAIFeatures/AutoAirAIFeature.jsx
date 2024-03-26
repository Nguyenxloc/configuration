import React from "react";

export default function AutoAirAIFeature() {
    return (
        <div>
            <div className="flex gap-[80px]">
                <h2 className="w-4/12 text-[80px]">AutoAir AI Features</h2>
                <div className="w-8/12">
                    <p className="text-[25px] w-[684px] h-[110px] leading-[28px] font-medium text-gray9 mt-[15px]">AutoAir AI streamlines airdrop participation, eliminating complexity. We scan on-chain transactions for high success rate wallets, offering an easy solution for users, regardless of experience level.</p>
                    <h3 className="text-[32px] font-medium">Our key features</h3>
                </div>
            </div>
            <div className="flex mt-[100px] gap-[200px]"> 
                <div className="w-3/12 h-fit">
                    <p className="font-bold text-[20px]">01</p>
                    <hr />
                    <h3 className="text-[24px] font">Automated Airdrop Farming</h3>
                    <p className="text-[20px] font-medium text-gray9">Use advanced AI to monitor on-chain transactions, detecting patterns signaling upcoming airdrops.</p>
                </div>
                <div className="w-3/12 h-fit">
                    <p className="font-bold text-[20px]">02</p>
                    <hr />
                    <h3 className="text-[24px] font">Data-Driven Insights</h3>
                    <p className="text-[20px] font-medium text-gray9">Analyze past airdrops for better predictions. AutoAir AI offers  recommendations, improving users' chances of airdrops.</p>
                </div>
                <div className="w-3/12 h-fit">
                    <p className="font-bold text-[20px]">03</p>
                    <hr />
                    <h3 className="text-[24px] font">User-Friendly Interface</h3>
                    <p className="text-[20px] font-medium text-gray9">Streamline airdrop hunting with our intuitive platform, accessible via AutoAir AI Terminal and Telegram Bots.</p>
                </div>
            </div>
        </div>

    );
}