import React from "react";
import "../App.css";
import logo from "../NASA_logo.svg";
import styled from "styled-components";

const NavSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding-top: 1%;
  width: 800px;
  text-decoration: none;
  h1 {
    font-size: 6em;
  }
`;

export default function NavBar(props) {
  console.log(props);
  return (
    <div>
      <NavSection>
        <img className="App-logo" src={logo} alt="nasaLogo" />
        <h1>Photo Of The Day</h1>
      </NavSection>
      <h3>Today's Date: {props.date}</h3>
    </div>
  );
}
