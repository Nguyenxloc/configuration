
import App324 from "configuration/324/App324";
import AppConfig from "configuration/appConfig/AppConfig";
import Env from "configuration/env/Env";
import HsNetworkList from "configuration/hsNetworkList/HsNetworkList";
import ListDapp from "configuration/listDapp/ListDapp";
import ListDappUI from "configuration/listDappUI/ListDappUI";
import PairInfo from "configuration/pair/PairInfo";
import React from "react";
import { Route, Routes } from "react-router-dom";
export default function RightSide() {
    return (
        <div className="w-7/12">
            <Routes>
                <Route path="/configuration/app-config" element={<AppConfig />}></Route>
                <Route path="/configuration/app-324" element={<App324 />}></Route>
                <Route path="/configuration/env" element={<Env />}></Route>
                <Route path="/configuration/list-dapp" element={<ListDapp />}></Route>
                <Route path="/configuration/hs-network-list" element={<HsNetworkList />}></Route>
                <Route path="/configuration/app-config-ui" element={<AppConfig />}></Route>
                <Route path="/configuration/app-324-ui" element={<App324 />}></Route>
                <Route path="/configuration/env-ui" element={<Env />}></Route>
                <Route path="/configuration/list-dapp-ui" element={<ListDappUI/>}></Route>
                <Route path="/configuration/hs-network-list-ui" element={<HsNetworkList />}></Route>
                <Route path="/configuration/pair-info" element={<PairInfo/>}></Route>
            </Routes>
        </div>
    )
}
