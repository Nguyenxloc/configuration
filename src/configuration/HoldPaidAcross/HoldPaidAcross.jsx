import React, { useEffect, useState } from "react";
import { PieChart } from "recharts";

export default function HoldPaidAcross() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (data.length == 0) {
            const data = [{ color: "color1", content: "Holdstation", percent: "61.7%" }, { color: "color1", content: "Holdstation", percent: "61.7%" },
            { color: "color1", content: "Holdstation", percent: "61.7%" }, { color: "color1", content: "Holdstation", percent: "61.7%" }];
            setData(data);
        }
    });
    return (
        <div className="bg-black7 text-white w-[1000px] h-[250px] flex">
            <div className="w-[212px] h-[212px] ms-[70px] mb-[50px]" style={{ border: "solid 2px red" }}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div style={{ border: "solid purple 1px" }} className="w-[536px] h-[70px] mt-[50px] ms-[50px]  grid grid-cols-2">
                    {data.map((item, index) => {
                        return (
                            <div className="ms-[20px]  flex">
                                <div className="w-[12px] h-[12px] bg-purple rounded-[4px] mt-2"></div>
                                <p className="text-[18px]">{item.content}</p>
                                <p className="ms-4 text-[18px]">{item.percent}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}