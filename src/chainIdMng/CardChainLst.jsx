import React from "react";

export default function CardChainLst(){
    return(
        <div className="w-[454px] h-[214px] bg-white p-[24] rounded-[24px]">
             <div className="flex gap-[10px]" >
                 <div className="w-[32px] h-[32px]"> 
                    <img src="https://autoair.xyz/symbol/swap.svg" alt="" />
                 </div>
                 <p className="text-[24px] leading-[32px] font-medium text-black">Swap</p>
             </div>
             <div className="items-center gap-[8px] flex flex-wrap w-[100px]">
                <div>div1</div>
                <div>div2</div>
                <div>div3</div>
                <div>div4</div>
             </div>
        </div>
    )
}