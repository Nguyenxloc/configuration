
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home"
import SideBar from 'component/SideBar';
import WelcomeTab from 'pages/WelcomeTab';
import ProfileTab from 'pages/WalletPage';
import Calculator from 'pages/Calculator';
import MainView from 'component/MainView';
import WalletPage from 'pages/WalletPage';
class App extends Component{
  render(){
      return(
          <Router>
            <div className="d-flex flex-row mb-3" style={{backgroundColor:"#f0f4fc"}}>
            <SideBar/>
            <Routes>
            <Route path="/crypto-checker/*" element={<WelcomeTab />}></Route>
            <Route path="/crypto-checker/calculator" element={<Calculator/>}/>
            <Route path="/crypto-checker/wallet" element={<WelcomeTab/>}/>
            <Route path="/crypto-checker/wallet/:chainID/:id" element={<WalletPage/>}/>
            </Routes>
            </div>
          </Router>
      )
  }
}
export default App;
