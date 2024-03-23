import React from "react";

export default function PopupBanner(){
    return( 
       <div className="flex w-[345px] h-[128px] p-[4px] rounded-3xl" style={{border:"solid purple 1px"}}>
            <div className="w-[156px] h-[120px] text-white rounded-3xl" style={{border:"solid red 1px"}}>comp1</div>
            <div className="w-[149px] h-[120px] text-white ms-[16px]" style={{border:"solid red 1px"}}>comp2</div>
       </div> 
    ); 
}