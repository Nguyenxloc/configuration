import React from "react";
import SideBarChainLst from "./SideBarChainLst";
import CardChainLst from "./CardChainLst";
import ChainLstTxt from "./ChainLstTxt";

export default function ChainLstView() {
  return (
    <div className="flex flex-col gap-[40px] bg-[#f2f2f2]">
      <div className="flex justify-center">
      <ChainLstTxt/>
      </div>
      <div className="flex">
        <SideBarChainLst />
        <CardChainLst />
      </div>
    </div>
  );
}
