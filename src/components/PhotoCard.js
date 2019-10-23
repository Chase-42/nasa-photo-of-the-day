import React from "react";
import "../App.css";

export default function PhotoCard(props) {
  console.log(props)
  return (
    <div className="photoCard">
      <img alt="nasaPhoto" className="nasaPhoto"
        src={props.url} />
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </div>







  )
}



{/* <iframe title={props.title} width="420" height="315"
        src={props.url}> />
      </iframe> */}