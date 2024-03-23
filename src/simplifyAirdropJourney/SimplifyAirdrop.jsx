import React from "react";

export default function SimplifyAirdrop(){
    return(
      <div className="bg-white w-[1000px]"> 
        <div>
        <h2 className="font-medium text-[48px] text-center">Simplify your airdrop</h2>
        <h2 className="font-medium text-[48px] text-center">journey: AutoAir AI,</h2>
        <h2 className="font-medium text-[48px] text-center">One-click farming solution</h2>
        <p className="text-gray9 font-medium text-[20px] text-center">Simple Pricing. Exceptional Benefits.</p>
        </div> 
        <div className="flex">
            <div className="w-[581px] h-[352px]" style={{border:"red solid 1px"}}>
                <div className="w-[320px] h-[52px] bg-gray10"></div>
            </div>
            <div className="w-[581px] h-[352px]" style={{border: "red solid 1px"}}>
            <div className="w-[320px] h-[52px] bg-black"></div>
            </div>
        </div>
      </div>  
    );
}