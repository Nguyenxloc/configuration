import React from "react";

export default function CardChainLst() {
  const data = [
    {
      iconURl: "https://autoair.xyz/symbol/swap.svg",
      tittle: "Swap",
      platform: [
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fholdstation.png&w=48&q=75",
          namePlf: "Holdstation",
        },
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fsyn.png&w=48&q=75",
          namePlf: "SyncSwap",
        },
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fmute.png&w=48&q=75",
          namePlf: "Mute",
        },
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fvelocore.png&w=48&q=75",
          namePlf: "Velocore",
        },
      ],
    },
    {
      iconURl: "https://autoair.xyz/symbol/trade.svg",
      tittle: "Trade",
      platform: [
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fholdstation.png&w=48&q=75",
          namePlf: "Holdstation",
        },
      ],
    },
    {
      iconURl: "https://autoair.xyz/symbol/mint.svg",
      tittle: "NFT Mint",
      platform: [
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fholdstation.png&w=48&q=75",
          namePlf: "BigInt",
        },
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fsyn.png&w=48&q=75",
          namePlf: "Tevaera",
        },
      ],
    },
    {
      iconURl: "https://autoair.xyz/symbol/staking.svg",
      tittle: "Borrow/Lend",
      platform: [
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fzerolend.png&w=48&q=75",
          namePlf: "Zerolend",
        },
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2FxBank.jpg&w=48&q=75",
          namePlf: "xBank Finance",
        },
      ],
    },
    {
      iconURl: "https://autoair.xyz/symbol/bridge.svg",
      tittle: "Bridge",
      platform: [
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Forbiter.png&w=48&q=75",
          namePlf: "Orbiter",
        },
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2Fzk.png&w=48&q=75",
          namePlf: "zkSync Portal",
        },
      ],
    },
    {
      iconURl: "https://autoair.xyz/symbol/other.svg",
      tittle: "Others",
      platform: [
        {
          iconPlfUrl:
            "https://autoair.xyz/_next/image?url=%2Fnetwork%2FtxSync.png&w=48&q=75",
          namePlf: "txSync",
        },
      ],
    },
  ];
  return (
    <div
      className="grid grid-cols-2 gap-[24px] gap-[8px] h-fit"
      style={{ border: "solid red 1px" }}
    >
      {data.map((item, index) => {
        return (
          <div className="w-full h-[214px] bg-white rounded-[24px] p-[24px] mb-[2px]">
            <div className="flex gap-[10px]">
              <div className="w-[32px] h-[32px]">
                <img src={item.iconURl} alt="" />
              </div>
              <p className="text-[24px] leading-[32px] font-medium text-black">
                {item.tittle}
              </p>
            </div>
            <div className=" flex gap-[8px] flex-wrap" style={{border:"1px solid red"}}>
              {item.platform.map((plf, index) => {
                return (
                  <div className="h-[48px] gap-[8px] px-[20px] py-[10px] rounded-full bg-[#0000000D] flex flex-wrap">
                    <img className="rounded-full" width={20} height={20} src={plf.iconPlfUrl} alt="" />
                    <span className="text-[16px] font-medium">{plf.namePlf}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
