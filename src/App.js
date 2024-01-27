
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import SideBar from "./component/SideBar";
import ProfileTab from "./user-comp/ProfileTab";
class App extends Component{
  render(){
      return(
          <div className="d-flex flex-row mb-3" style={{backgroundColor:"#f0f4fc"}}>
              <SideBar/>
              <ProfileTab/>
          </div>
      )
  }
}
export default App;
