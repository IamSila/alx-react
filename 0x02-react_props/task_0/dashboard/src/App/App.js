import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
// Notifications, Login, Footer, and Header components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
