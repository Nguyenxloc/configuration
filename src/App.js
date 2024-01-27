
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
class App extends Component{
  render(){
      return(
          <Router>
            <Routes>
              <Route path='/crypto-checker' exact={true} element={<Home/>}/>
            </Routes>
          </Router>
      )
  }
}
export default App;
