import React from "react";

export default function OurBackerView() {
  const dataTotal = [
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F0xbrent.56d3bdfd.png&w=128&q=75",
      name: "0xbrent",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FXeusthegreat%20.7bb8dcbd.png&w=128&q=75",
      name: "Xeusthegreat",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSisyphus.57b21309.png&w=128&q=75",
      name: "Sisyphus",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheatcoiner.706a785d.png&w=128&q=75",
      name: "cheatcoiner",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frtrdacc.1ff943e6.png&w=128&q=75",
      name: "L (rtrd/acc)",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAirN.3b408df2.png&w=128&q=75",
      name: "AirN ｜ 深潮TechFlow",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSmol.049704cf.png&w=128&q=75",
      name: "Smol Smol Smol ",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdefizard.85b4e0c3.png&w=96&q=75",
      name: "defizard",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpwnlord69.dccdfcec.png&w=96&q=75",
      name: "pwnlord69",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCryptoJamie.72d00ed9.png&w=96&q=75",
      name: "CryptoJamie",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSaitama.cca59937.png&w=96&q=75",
      name: "Saitama",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSemyonCole.7a56fd67.png&w=96&q=75",
      name: "Semyon Cole",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsam.9ccacc28.png&w=96&q=75",
      name: "sam",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSplinTeron.f611dde6.png&w=96&q=75",
      name: "Splin Teron",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farndxt.a29608fd.png&w=48&q=75",
      name: "arndxt",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFaycy.53c5493f.png&w=96&q=75",
      name: "Faycy",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPRUDENT.50294a93.png&w=96&q=75",
      name: "P R U D E N T",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNino.37ede3ad.png&w=96&q=75",
      name: "Nino",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHomer.0a3ae4d6.png&w=96&q=75",
      name: "HOMΞR",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFinish.46a035ff.png&w=96&q=75",
      name: "Finish",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSurf.84b63752.png&w=96&q=75",
      name: "Surf",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNouraDelRey.ddc65336.png&w=96&q=75",
      name: "Noura Del Rey",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJUSTICE.4f1e9b31.png&w=96&q=75",
      name: "JUSTICΞ",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FShiba_GM.436e5569.png&w=96&q=75",
      name: "Shiba_GM",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKaff.696460b0.png&w=96&q=75",
      name: "Kaff",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTHATWEB3DUDE.3f898970.png&w=96&q=75",
      name: "THAT WEB3 DUDE",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FP0TENS.1d3d1c0b.png&w=96&q=75",
      name: "P0TENS",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafi_0x.6a5fa515.png&w=96&q=75",
      name: "Rafi_0x",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCryptoGideon.3a27ad52.png&w=96&q=75",
      name: "Crypto Gideon",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDOLAK1NG.b436c9c0.png&w=96&q=75",
      name: "DOLAK1NG",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNDF.c74bc71c.png&w=96&q=75",
      name: "NDF",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBasilla.f7f0a2f8.png&w=96&q=75",
      name: "Basilla",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFaDegen.3a9041b2.png&w=96&q=75",
      name: "Fa.Degen",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsapphy.7ebafff1.png&w=96&q=75",
      name: "sapphy",
    },
  ];
  const dataRow1 = [
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F0xbrent.56d3bdfd.png&w=128&q=75",
      name: "0xbrent",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FXeusthegreat%20.7bb8dcbd.png&w=128&q=75",
      name: "Xeusthegreat",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSisyphus.57b21309.png&w=128&q=75",
      name: "Sisyphus",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheatcoiner.706a785d.png&w=128&q=75",
      name: "cheatcoiner",
    },
  ];
  const dataRow2 = [
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheatcoiner.706a785d.png&w=128&q=75",
      name: "cheatcoiner",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frtrdacc.1ff943e6.png&w=128&q=75",
      name: "L (rtrd/acc)",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAirN.3b408df2.png&w=128&q=75",
      name: "AirN ｜ 深潮TechFlow",
    },
  ];
  const dataRow3 = [
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdefizard.85b4e0c3.png&w=96&q=75",
      name: "defizard",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpwnlord69.dccdfcec.png&w=96&q=75",
      name: "pwnlord69",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCryptoJamie.72d00ed9.png&w=96&q=75",
      name: "CryptoJamie",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSaitama.cca59937.png&w=96&q=75",
      name: "Saitama",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSemyonCole.7a56fd67.png&w=96&q=75",
      name: "Semyon Cole",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsam.9ccacc28.png&w=96&q=75",
      name: "sam",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSplinTeron.f611dde6.png&w=96&q=75",
      name: "Splin Teron",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farndxt.a29608fd.png&w=48&q=75",
      name: "arndxt",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFaycy.53c5493f.png&w=96&q=75",
      name: "Faycy",
    },
  ];
  const dataRow4 = [
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPRUDENT.50294a93.png&w=96&q=75",
      name: "P R U D E N T",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNino.37ede3ad.png&w=96&q=75",
      name: "Nino",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHomer.0a3ae4d6.png&w=96&q=75",
      name: "HOMΞR",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFinish.46a035ff.png&w=96&q=75",
      name: "Finish",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSurf.84b63752.png&w=96&q=75",
      name: "Surf",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNouraDelRey.ddc65336.png&w=96&q=75",
      name: "Noura Del Rey",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJUSTICE.4f1e9b31.png&w=96&q=75",
      name: "JUSTICΞ",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FShiba_GM.436e5569.png&w=96&q=75",
      name: "Shiba_GM",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKaff.696460b0.png&w=96&q=75",
      name: "Kaff",
    },
  ];
  const dataRow5 = [
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTHATWEB3DUDE.3f898970.png&w=96&q=75",
      name: "THAT WEB3 DUDE",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FP0TENS.1d3d1c0b.png&w=96&q=75",
      name: "P0TENS",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRafi_0x.6a5fa515.png&w=96&q=75",
      name: "Rafi_0x",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCryptoGideon.3a27ad52.png&w=96&q=75",
      name: "Crypto Gideon",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDOLAK1NG.b436c9c0.png&w=96&q=75",
      name: "DOLAK1NG",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNDF.c74bc71c.png&w=96&q=75",
      name: "NDF",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBasilla.f7f0a2f8.png&w=96&q=75",
      name: "Basilla",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFaDegen.3a9041b2.png&w=96&q=75",
      name: "Fa.Degen",
    },
    {
      avatar:
        "https://autoair.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsapphy.7ebafff1.png&w=96&q=75",
      name: "sapphy",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h2 className="text-[48px] leading-[56px] font-medium">Our Backers</h2>
      </div>
      <div className="">
        <div className="flex">
          {dataRow1.map((item, index) => {
            return (
              <div
                className="w-3/12 h-[178px]"
                style={{ border: "solid red 1px" }}
              >
                <div className="py-[50px] flex flex-col gap-[20px]">
                  <div className="flex justify-center">
                    <img width={40} height={40} src={item.avatar} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="no-underline text-[24px] text-[#000] font-medium leading-[24px]"
                      href="https://twitter.com/HoldstationW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          {dataRow2.map((item, index) => {
            return (
              <div
                className="w-4/12 h-[178px]"
                style={{ border: "solid red 1px" }}
              >
                <div className="py-[50px] flex flex-col gap-[20px]">
                  <div className="flex justify-center">
                    <img width={40} height={40} src={item.avatar} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="no-underline text-[24px] text-[#000] font-medium leading-[24px]"
                      href="https://twitter.com/HoldstationW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          {dataRow3.map((item, index) => {
            return (
              <div
                className="w-2/12 h-[118px]"
                style={{ border: "solid red 1px" }}
              >
                <div className="py-[30px] flex flex-col gap-[10px]">
                  <div className="flex justify-center">
                    <img width={40} height={40} src={item.avatar} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="no-underline text-[14px] text-[#000] font-medium leading-[24px]"
                      href="https://twitter.com/HoldstationW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          {dataRow4.map((item, index) => {
            return (
              <div
                className="w-2/12 h-[118px]"
                style={{ border: "solid red 1px" }}
              >
                <div className="py-[30px] flex flex-col gap-[10px]">
                  <div className="flex justify-center">
                    <img width={40} height={40} src={item.avatar} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="no-underline text-[14px] text-[#000] font-medium leading-[24px]"
                      href="https://twitter.com/HoldstationW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          {dataRow5.map((item, index) => {
            return (
              <div
                className="w-2/12 h-[118px]"
                style={{ border: "solid red 1px" }}
              >
                <div className="py-[30px] flex flex-col gap-[10px]">
                  <div className="flex justify-center">
                    <img width={40} height={40} src={item.avatar} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="no-underline text-[14px] text-[#000] font-medium leading-[24px]"
                      href="https://twitter.com/HoldstationW?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
