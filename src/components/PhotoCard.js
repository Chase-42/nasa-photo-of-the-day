import React from "react";
import styled from "styled-components";

const PhotoCardDiv = styled.div`
  background: rgba(84, 84, 84, 0.5);
  margin: 0 auto;
  width: 750px;
  height: auto;
  text-align: center;
  box-shadow: 5px 10px #103e94;
  border-radius: 15px;
`;

export default function PhotoCard(props) {
  console.log(props);
  return (
    <PhotoCardDiv>
      <img alt="nasaPhoto" className="nasaPhoto" src={props.url} />
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </PhotoCardDiv>
  );
}
