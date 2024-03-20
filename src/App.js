
import './App.css';
import React, {Component} from "react";
import RightSide from 'configuration/component/RightSide';
import SideBar from 'configuration/component/SideBar';
class App extends Component{
  render(){
      return(
        <div className="App">
        <div className="flex flex-row">
          <SideBar />
          <RightSide />
        </div>
    </div>
      )
  }
}
export default App;
