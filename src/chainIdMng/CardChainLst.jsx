import React from "react";

export default function CardChainLst(){
    return(
        <div className="w-[400px] h-[214px] bg-white p-[24] rounded-[24px] gap-[24px]">
             <div className="flex gap-[10px]" >
                 <div className="w-[32px] h-[32px]"> 
                    <img src="https://autoair.xyz/symbol/swap.svg" alt="" />
                 </div>
                 <p className="text-[24px] leading-[32px] font-medium text-black">Swap</p>
             </div>
             <div className=" flex flex-wrap">
                <div className="h-[48px]">div1234556</div>
                <div className="h-[48px]">div2432423</div>
                <div className="h-[48px]">div3423423</div>
                <div className="h-[48px]">div4423432</div>
             </div>
        </div>
    )
}