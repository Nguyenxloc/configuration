import React from "react";

export default function PairInfoCard(dataPrefix) {
    console.log("data prefix: ", dataPrefix.dataPrefix.chartName);
    
    return (
        <div className="w-32 h-40 bg-black6 rounded-lg">
            <div className="">
                <img className="w-10" src={dataPrefix.dataPrefix.imageUrl} alt=""/>
                <p className="text-white text-start">{dataPrefix.dataPrefix.name}</p>
                <p className="text-white text-start">{dataPrefix.dataPrefix.symbol}</p>
                <p className="text-white text-start">{dataPrefix.dataPrefix.groupName}</p>
            </div>
        </div>
    )
}