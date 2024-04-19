import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { useState } from "react";
import AllRoutes from "./components/AllRoutes";
import DrawerSidebar from './components/LeftSidebar/DrawerSidebar';
import { BrowserRouter as Router,} from "react-router-dom";
function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };
  return (
  <Router>
   <Navbar   
   toggleDrawer={toggleDrawer}/>
   {
    <DrawerSidebar  
    toggleDrawer={toggleDrawer}
    toggleDrawerSidebar={toggleDrawerSidebar}/>
   }
   <AllRoutes/>
  </Router>
    
  );
}

export default App;
