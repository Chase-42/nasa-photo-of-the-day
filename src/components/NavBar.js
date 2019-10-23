import React from "react";
import "../App.css";
import logo from "../NASA_logo.svg"


export default function NavBar(props) {
  return (
    <header>

      <nav className="navBar">
        <img className="App-logo" src={logo} alt="nasaLogo" />
        <a href="#" className="navTags">Home</a>
        <a href="#" className="navTags">About</a>
        <a href="#" className="navTags">Sign Up</a>
      </nav>

      <h1>Photo Of The Day</h1>
      <h3>Today's Date: {props.date}</h3>
    </header>
  )
}