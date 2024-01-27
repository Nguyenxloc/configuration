import React, { Component } from 'react';
import './App.css';
import SideBar from "./component/SideBar";
import ProfileTab from "./user-comp/ProfileTab";
class Home extends Component {
    render() {
        return (
        <div className="d-flex flex-row mb-3" style={{backgroundColor:"#f0f4fc"}}>
            <SideBar/>
            <ProfileTab/>
        </div>
        );
    }
}
export default Home;