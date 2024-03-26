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
    <div className="w-9/12 grid grid-cols-2 gap-[24px]" style={{border:"solid red 1px"}}>
      {data.map((item, index) => {
        return (
          <div className="w-full h-[214px] bg-white p-[24] rounded-[24px] gap-[24px]">
            <div className="flex gap-[10px]">
              <div className="w-[32px] h-[32px]">
                <img src={item.iconURl} alt="" />
              </div>
              <p className="text-[24px] leading-[32px] font-medium text-black">
                {item.tittle}
              </p>
            </div>
            <div className=" flex flex-wrap">
            {item.platform.map((plf,index) => {
              return (
                  <div className="h-[48px]">{plf.namePlf}</div>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
