import React from "react";
import SideBarChainLst from "./SideBarChainLst";
import CardChainLst from "./CardChainLst";
import ChainLstTxt from "./ChainLstTxt";

export default function ChainLstView() {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex justify-center">
      <ChainLstTxt/>
      </div>
      <div className="flex gap-[103px]">
        <SideBarChainLst />
        <CardChainLst />
      </div>
    </div>
  );
}
