
import './App.css';
import React, {Component} from "react";
import RightSide from 'configuration/component/RightSide';
import SideBar from 'configuration/component/SideBar';
import Navbar from 'header/Navbar';
class App extends Component{
  render(){
      return(
        <div className="App">
        <div className="flex flex-row">
          <Navbar/>
        </div>
    </div>
      )
  }
}
export default App;
