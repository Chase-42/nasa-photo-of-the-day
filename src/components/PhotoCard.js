import React from 'react';
import styled from 'styled-components';

export default function PhotoCard(props) {
  return (
    <PhotoCardDiv>
      <img alt='nasaPhoto' className='nasaPhoto' src={props.url} />
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </PhotoCardDiv>
  );
}

const PhotoCardDiv = styled.div`
  background: rgba(84, 84, 84, 0.5);
  margin: 0 5% 10% 5%;
  padding-bottom: 5%;
  height: auto;
  text-align: center;
  box-shadow: 5px 10px #103e94;
  border-radius: 15px;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.3rem;
  }
  img {
    width: 90%;
    height: 30rem;
    @media (max-width: 800px) {
      height: 25rem;
    }
    @media (max-width: 700px) {
      height: 20rem;
    }
    overflow: hidden;
    object-fit: cover;
  }
`;
