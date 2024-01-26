import React, { Component } from 'react';
import './App.css';
import SideBar from "./component/SideBar";
import MainView from "./component/MainView";
import AvtAreaView from "./user-view/AvtAreaView";

class Home extends Component {
    render() {
        return (
        <div className="d-flex flex-row mb-3">
            <SideBar/>
            <AvtAreaView/>
        </div>
        );
    }
}
export default Home;