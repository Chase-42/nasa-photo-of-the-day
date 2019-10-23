import React from "react";
import "../App.css";
import logo from "../NASA_logo.svg"
import styled from "styled-components";

const NavSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding-top: 1%;
  width: 750px;
  font-size: 1.5rem;
  text-decoration: none
  color: #FC3D21
`;

export default function NavBar(props) {
  console.log(props)
  return (
    <div>
      <NavSection>
        <img className="App-logo" src={logo} alt="nasaLogo" />
        <a href="#" className="navTags">Home</a>
        <a href="#" className="navTags">About</a>
        <a href="#" className="navTags">Sign Up</a>
      </NavSection>
      <h1>Photo Of The Day</h1>
      <h3>Today's Date: {props.date}</h3>
    </div>
  )
}
