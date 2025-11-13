import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login'

function App() {
  return (
    
    <div className="App">
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
