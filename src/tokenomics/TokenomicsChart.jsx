import React from "react";
import { Cell, Pie, PieChart } from "recharts";

export default function TokenomicsChart() {
  const data = [
    { name: "Public Sale", value: 200 },
    { name: "Team", value: 50 },
    { name: "Airdrop", value: 100 },
    { name: "Community Reserve", value: 200 },
    { name: "Private Round", value: 250 },
    { name: "Seed Round", value: 150 },
    { name: "Liquidity", value: 50 },
  ];
  const COLORS = [
    "#2793f7",
    "#42CA80",
    "#8D75ED",
    "#F7BD27",
    "#FF679E",
    "#000000",
    "#FF6B3D",
  ];
  return (
    <div className="flex justify-center">
      <div className="flex">
        <div
          className="w-[326px] h-[468px] ms-[80px]"
          style={{ border: "solid red 1px" }}
        >
          <PieChart width={326} height={468}>
            <Pie
              data={data}
              cx={155}
              cy={200}
              innerRadius={110}
              outerRadius={160}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div
          className="w-[700px] h-[496px] ms-[50px]"
          style={{ border: "solid red 1px" }}
        >
          <p className="text-[20px] font-medium leading-[28px] text-gray9">
            This table provides a clear overview of the token distribution,
            immediate availability at TGE, and the vesting schedule for each
            category of the
            <span className="text-black"> AutoAir AI</span>. This structure aims
            to balance the needs of early investors and team members with the
            project‘s long-term sustainability and success.
          </p>
          <div className="grid grid-rows-4 grid-flow-col gap-x-[88px] gap-y-[40px]">
            <div
              className="w-[306px] h-[49px] flex gap-[12px]"
              style={{ border: "solid red 1px" }}
            >
              <div className="w-[12px] h-[49px] bg-blue1 rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-col"
                style={{ border: "solid 1px red" }}
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Public Sale
                </p>
                <p className="font-bold">20%</p>
              </div>
            </div>
            <div
              className="w-[306px] h-[49px] flex gap-[12px]"
              style={{ border: "solid red 1px" }}
            >
              <div className="w-[12px] h-[49px] bg-[#8D75ED] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-col"
                style={{ border: "solid 1px red" }}
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Airdrop
                </p>
                <p className="font-bold">10%</p>
              </div>
            </div>
            <div
              className="w-[306px] h-[49px] flex gap-[12px]"
              style={{ border: "solid red 1px" }}
            >
              <div className="w-[12px] h-[49px] bg-[#FF679E] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-col"
                style={{ border: "solid 1px red" }}
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Private Round
                </p>
                <p className="font-bold">25%</p>
              </div>
            </div>
            <div
              className="w-[306px] h-[49px] flex gap-[12px]"
              style={{ border: "solid red 1px" }}
            >
              <div className="w-[12px] h-[49px] bg-blue1 rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-col"
                style={{ border: "solid 1px red" }}
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Liquidity
                </p>
                <p className="font-bold">5%</p>
              </div>
            </div>
            <div
              className="w-[306px] h-[49px] flex gap-[12px]"
              style={{ border: "solid red 1px" }}
            >
              <div className="w-[12px] h-[49px] bg-[#42CA80] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-col"
                style={{ border: "solid 1px red" }}
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Team
                </p>
                <p className="font-bold">5%</p>
              </div>
            </div>
            <div
              className="w-[306px] h-[49px] flex gap-[12px]"
              style={{ border: "solid red 1px" }}
            >
              <div className="w-[12px] h-[49px] bg-[#F7BD27] rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-col"
                style={{ border: "solid 1px red" }}
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Community Reserve
                </p>
                <p className="font-bold">20%</p>
              </div>
            </div>
            <div
              className="w-[306px] h-[49px] flex gap-[12px]"
              style={{ border: "solid red 1px" }}
            >
              <div className="w-[12px] h-[49px] bg-black rounded-[2px]"></div>
              <div
                className="w-[68px] h-[49px] gap-[5px] flex flex-col"
                style={{ border: "solid 1px red" }}
              >
                <p className="text-gray9 text-[14px] leading-[20px] font-bold whitespace-nowrap h-[2px]">
                  Seed Round
                </p>
                <p className="font-bold">15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
