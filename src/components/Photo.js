import React from 'react';
import useRequest from '../hooks/useRequest';
import PhotoCard from './PhotoCard';
import NavBar from './NavBar';
import styled from 'styled-components';

export default function Data() {
  const { data, loading, error } = useRequest(
    'https://api.nasa.gov/planetary/apod?api_key=ItoIIAhlkPHvGHHG649w5IuuVrhA5dsybtdN9hQh'
  );

  if (loading)
    return (
      <LoadingDiv>
        <h1>Loading...</h1>
      </LoadingDiv>
    );
  if (error.error)
    return (
      <LoadingDiv>
        <h2>Oops! Something went wrong... {error.error.message}</h2>
      </LoadingDiv>
    );

  return (
    <PhotoDiv>
      <NavBar date={data.date} />
      <PhotoCard
        key={data.url}
        id={data.url}
        url={data.url}
        title={data.title}
        info={data.explanation}
        photo={data.url}
      />
    </PhotoDiv>
  );
}

const PhotoDiv = styled.div`
  color: white;
  margin: 0 auto;
  width: 100%;
  max-width: 48rem;
  height: auto;
`;

const LoadingDiv = styled.div`
  color: white;
  margin-top: 15%;
`;
