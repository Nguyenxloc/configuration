import React from "react";

export default function Navbar() {
  const data = ["Introduction", "Pricing", "Tokenomics", "Roadmap", "Analytics"];
  return (
    <div className="bg-black w-[1000px] h-[1000px]">
      <div className="w-[900px] h-[70px] bg-white rounded-5 flex" style={{ border: "solid red 1px" }}>
        <div className="flex" style={{border:"red solid 1px"}}>
        <img className="w-[60px] ms-[20px]" src="https://autoair.xyz/logo/logo.svg" alt="" />
        <span className="ms-1 mt-[20px] font-bold">AutoAir AI</span>
        </div>
        <div className="flex" style={{border:"solid red 1px"}}>
        <ul className="flex gap-[25px] mt-[20px] text-gray7 font-semibold" >
          <li><button>Introduction</button></li>
          <li><button>Pricing</button></li>
          <li><button>Tokennomics</button></li>
          <li><button>Roadmap</button></li>
          <li><button>Analytics</button></li>
        </ul>
        </div>
        <div className="w-[121px] h-[40px] mt-3 ms-[60px] bg-black7 rounded-4" style={{border: "solid red 1px"}}>
        </div>
      </div>
    </div>
  );
}