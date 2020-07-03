import React from 'react';
import '../App.css';
import logo from '../NASA_logo.svg';
import styled from 'styled-components';

export default function NavBar(props) {
  console.log(props);
  return (
    <NavBarDiv>
      <NavSection>
        <img className='App-logo' src={logo} alt='nasaLogo' />
        <h1>Photo Of The Day</h1>
      </NavSection>
      <h3>Today's Date: {props.date}</h3>
    </NavBarDiv>
  );
}

const NavBarDiv = styled.div`
  h1 {
    font-size: 5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  margin: auto;
`;
const NavSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
  margin: auto;
`;
