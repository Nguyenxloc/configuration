import React from "react";

export default function Navbar() {
  const data = [
    "Introduction",
    "Pricing",
    "Tokenomics",
    "Roadmap",
    "Analytics",
  ];
  return (
    <div className="py-[7px] px-[16px] h-[56px] w-6/12 bg-white rounded-tr-[20px] rounded-bl-[20px]">
      <div
        className=" flex"
      >
        <div className="flex">
          <img
            className="ms-[20px]"
            width={28}
            height={16}
            src="https://autoair.xyz/logo/logo.svg"
            alt=""
          />
          <p className="font-bold">AutoAir AI</p>
        </div>
        <div className="flex">
          <ul className="flex gap-[25px] text-gray7 font-semibold">
            <li>
              <button>Introduction</button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Tokennomics</button>
            </li>
            <li>
              <button>Roadmap</button>
            </li>
            <li>
              <button>Analytics</button>
            </li>
          </ul>
        </div>
        <div
          className="w-[121px] h-[40px] ms-[60px] bg-black7 rounded-4"
        ></div>
      </div>
    </div>
  );
}
