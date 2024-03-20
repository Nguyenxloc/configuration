import React, { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";

export default function Env() {
    const [data, setData] = useState([]);
    async function getData() {
        const res = await fetch("https://static.holdstation.com/wallet-configs/env.json");
        const data = await res.json();
        setData(data);
    }
    useEffect(() => {
        if (data.length == 0) {
            getData();
        }
    }
        , [data]);

    return (
        <div>
            <h1><strong>Env</strong></h1>
            <table className="border-collapse border border-slate-500">
                <tr>
                    <th className="border border-slate-600">Index</th>
                    <th className="border border-slate-600">covalentApiKey</th>
                    <th className="border border-slate-600">etherScanKey</th>
                    <th className="border border-slate-600">bscScanKey</th>
                    <th className="border border-slate-600">polygonScanKey</th>
                    <th className="border border-slate-600">Name</th>
                    <th className="border border-slate-600">Url</th>
                </tr>
                <tr>
                    <td className="border border-slate-700">#</td>
                    <td className="border border-slate-700">{JSON.stringify(data.covalentApiKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.etherScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.bscScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.polygonScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.simpleHashKeyAndroid)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.simpleHashKeyIos)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.arbiScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.ftmScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.mumbaiScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.avaxScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.optiScanKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.lineaKey)}</td>
                    <td className="border border-slate-700">{JSON.stringify(data.baseKey)}</td>
                </tr>
            </table>
        </div>
    )
}