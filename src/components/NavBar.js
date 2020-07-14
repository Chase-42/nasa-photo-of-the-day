import React from 'react';
import '../App.css';
import logo from '../NASA_logo.svg';
import styled from 'styled-components';

export default function NavBar() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return (
    <NavBarDiv>
      <NavSection>
        <img className='App-logo' src={logo} alt='nasaLogo' />
        <h1>Photo Of The Day</h1>
      </NavSection>
      <h3>Today's Date: {`${day}-${month}-${year}`}</h3>
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
  @media (max-width: 800px) {
    display: block;
    margin-top: 5%;
  }
`;
