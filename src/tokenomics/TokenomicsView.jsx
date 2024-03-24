import React from "react";
import TokenomicsTbl from "./TokenomicsTbl";
import TokenomicsChart from "./TokenomicsChart";

export default function TokenomicsView() {
    return (
        <div>
            <div className="ms-[100px]">
            <TokenomicsTbl/>
            </div>
            <div>
            <TokenomicsChart/>
            </div>
        </div>
    );
}