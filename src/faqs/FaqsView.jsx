import React from "react";

export default function FaqsView() {
  const data = [
    { index: "01", content: "What is Autoair AI" },
    { index: "02", content: "Which network can I farm with AutoAir" },
    { index: "03", content: "Who defines the airdrop tasks" },
    { index: "04", content: "What initiates transactions and how often" },
  ];
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img
            className=""
            width={248}
            height={160}
            src="https://autoair.xyz/_next/image?url=%2Ficon%2Fqmk.png&w=256&q=75"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <h2 className="text-[80px] w-8/12 text-center">
            Find Solutions in Our FAQs
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="text-[24px] font-medium text-[#686A6C]">
            Frequently Asked Questions
          </p>
        </div>
        {data.map((item, index) => {
          return (
            <div className="py-[48px] border border-[#E1E2E2] px-[40px]">
              <div className="flex gap-[16px]">
                <p className="w-3/12 text-[48px] font-medium text-start">{index + 1}</p>
                <p className="w-8/12 text-[48px] font-medium text-start">{item.content}</p>
                <div className="bg-black w-[56px] h-[56px] rounded-full p-[16px]">
                  <img
                    width={24}
                    height={24}
                    src="https://autoair.xyz/icon/plus.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center mt-[50px]">
            <button className="bg-[#0000001A] w-[183px] h-[60px] rounded-[16px] font-medium text-[24px]">
                Learn more
            </button>
            <div className="w-[60px] h-[60px] rounded-full bg-[#0000001A] p-[16px]"> 
                <img width={25} height={24} src="https://autoair.xyz/icon/link.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
