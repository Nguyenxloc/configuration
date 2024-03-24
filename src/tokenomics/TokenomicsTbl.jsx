import React from "react";

export default function TokenomicsTbl() {
    return (
        <div>
            <h2>Tokenomics</h2>
            <table className="table-fixed">
                <thead>
                    <tr className="text-gray11 border-b border-gray12">
                        <th className="text-[16px] py-[12px] px-[56px] font-bold">Allowcation</th>
                        <th className="text-[16px] py-[12px] px-[56px] font-bold">Percentage</th>
                        <th className="text-[16px] py-[12px] px-[56px] font-bold">TGE</th>
                        <th className="text-[16px] py-[12px] px-[56px] font-bold">Vesting Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Public Sale</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">20%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">100%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Immediate</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Team</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">5%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">0%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">6-month cliff, then 12-month linear vesting</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Airdrop</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">10%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">10%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">2 months - split into multiple tranches, align with the major ecosystem airdrops</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Community Reserve</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">20%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">0%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">6-month linear vesting</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Private Round</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">25%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">33%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Remaining vests linearly over 6 months</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Seed Round</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">15%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">0%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Cliff 2 months, then 6-month linear vesting</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Liquidity</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">5%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">100%</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Locked for 2 years</td>
                    </tr>
                    <tr className="border-b border-gray12">
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">Total</td>
                        <td className="text-[16px] py-[12px] px-[56px] font-bold">100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}