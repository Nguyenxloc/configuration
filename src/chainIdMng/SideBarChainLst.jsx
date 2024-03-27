import React from "react";

export default function SideBarChainLst(){
     const data =[
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fzk.png&w=48&q=75",content:"ZkSync"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fblast.png&w=96&q=75",content:"Blast"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fmerlin.png&w=96&q=75",content:"Merlin"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fbabylon.png&w=96&q=75",content:"Babylon"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Feigen.png&w=96&q=75",content:"Eigen"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Flinea.png&w=96&q=75",content:"Linea"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fmode.png&w=96&q=75",content:"Mode"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fmantle.png&w=96&q=75",content:"Mantle"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fscroll.png&w=96&q=75",content:"Scroll"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Ftaiko.png&w=96&q=75",content:"Taiko"},
       {iconURL:"https://autoair.xyz/_next/image?url=%2Fnetwork%2Fbeam.png&w=96&q=75",content:"Beam"},   
     ];
     return(
        <div className="w-2/12 flex flex-col gap-[8px]"> 
               {data.map(
                    (item,index)=>{
                         return(
                         <div className="px-[60px] py-[10px]">
                              <button className="flex p-[5px] gap-[8px]">
                                   <img width={20} height={20} src={item.iconURL} alt="" />
                                   <span className="text-[16px] leading-[28px] font-medium text-black">{item.content}</span>
                              </button>
                         </div>
                         )
                    }
               )}
        </div>
     )
}