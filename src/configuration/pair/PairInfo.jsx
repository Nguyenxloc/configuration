import React, { useEffect, useState } from "react";
import PairInfoCard from "./PairInfoCard";
export default function PairInfo() {
  const [data, setData] = useState([]);
  async function getData() {
    const res = await fetch("https://static.holdstation.com/wallet-configs/chains/v6/324.json");
    const data = await res.json();
    setData(data.pairsInfo);
  }
  console.log("chain name: ", data);
  useEffect(
    () => {
      if (data.length == 0) {
        getData();
      }
    }
  );
  return (
        <div className="grid grid-cols-4 gap-4">
          {data.map((item,index) =>(
            <PairInfoCard dataPrefix={item} />
          )
          )
          }
        </div>
      );
}