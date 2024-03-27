import React from "react";

export default function AnalyticsView() {
  return (
    <div className="bg-[#f2f2f2] gap-[100px]">
      <div className="font-medium w-full text-center text-[80px] leading-[80px] py-[56px]">
        <p>AutoAir Stats</p>
      </div>
      <div className="flex justify-center mb-[56px]">
        <div
          className="w-7/12 text-[32px] font-medium text flex justify-center"
          style={{ border: "solid red 1px" }}
        >
          AutoAir is an airdrop farming Telegram bot that leverages AI to
          streamline the process. By analyzing historical data, it tailors
          strategies for users, enabling effortless participation with 1-click
          access.
        </div>
      </div>
      <div className="p-[40px] bg-white" style={{border:"1px solid red"}}>
        <div className="flex flex-col gap-[16px]">
          <div className="flex text-[32px] font-medium">Overview</div>
          <div className="flex gap-[10px]">
            <div
              className="px-[20px] py-[10px] rounded-full"
              style={{ border: "1px red solid" }}
            >
              Today
            </div>
            <div
              className="px-[20px] py-[10px] rounded-full"
              style={{ border: "1px red solid" }}
            >
              Week
            </div>
            <div
              className="px-[20px] py-[10px] rounded-full"
              style={{ border: "1px red solid" }}
            >
              Month
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white mt-[20px]">
      <div className="gap-[10px] h-[296px] w-4/12 py-[60px]" style={{border:"1px red solid"}}>
        <h2 className="text-start text-[24px]">Wallets Created</h2>
        <div className="flex gap-[20px]">
        <h2 className="text-[80px]">1770</h2>
        <h2>###chart</h2>
        </div>
      </div>
      <div className="gap-[10px] h-[296px] w-4/12 py-[60px]" style={{border:"1px red solid"}}>
        <h2 className="text-start text-[24px]">Wallets Created</h2>
        <div className="flex gap-[20px]">
        <h2 className="text-[80px]">1770</h2>
        <h2>###chart</h2>
        </div>
      </div>
      <div className="gap-[10px] h-[296px] w-4/12 py-[60px]" style={{border:"1px red solid"}}>
        <h2 className="text-start text-[24px]">Wallets Created</h2>
        <div className="flex gap-[20px]">
        <h2 className="text-[80px]">1770</h2>
        <h2>###chart</h2>
        </div>
      </div>  
      </div>
    </div>
  );
}
