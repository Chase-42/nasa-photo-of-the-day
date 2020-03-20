import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard"
import NavBar from "./NavBar"
import "../App.css";
import axios from 'axios';


export default function Data() {
  const [pic, setPic] = useState();
  const [title, setTitle] = useState();
  const [info, setInfo] = useState();
  const [date, setDate] = useState();
  const [media, setMediaType] = useState();


  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=ItoIIAhlkPHvGHHG649w5IuuVrhA5dsybtdN9hQh')
      .then(res => {
        const photo = res.data.url;
        const headline = res.data.title;
        const info = res.data.explanation;
        const date = res.data.date;
        const mediaType = res.data.media_type;
        setPic(photo);
        setTitle(headline);
        setInfo(info)
        setDate(date);
        setMediaType(mediaType);
      })

      .catch(err => {
        console.log('mistake', err);
      });
  }, [])

  return (
    <div className="App">
      <NavBar
        date={date}
      />
      <PhotoCard
        key={pic}
        id={pic}
        url={pic}
        title={title}
        info={info}
        photo={pic} />
    </div>
  )


}