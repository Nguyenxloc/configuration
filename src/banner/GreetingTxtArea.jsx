import React from "react";

export default function GreetingTxtArea(){
     return(
        <div className="w-[874px] h-[144px] text-white text-[40px]" style={{border:"solid red 1px"}}>
            <div className="mt-2 flex">
            <span>
            <img className="w-[98px] h-[58px] ms-[20px]" src="https://autoair.xyz/logo/logo-white.svg" alt="" />
            </span>
            <p className="mt-[10px]">
            Greeting, Human.    
            </p>
            </div>
            <div className="ms-[20px]">
            Ready for airdrop Auto-Farming
            </div>
        </div>
     )
}