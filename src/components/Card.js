import React from "react";
import locationIcon from '../images/location.svg';

export default function Card({ imageName, country, link, name, dateIn, dateOut, review }) {
  return (
    <div className='card'>
      <img src={require(`../images/${imageName}.jpeg`)} className='card--image' />
      <div className='card--meta'>
        <img src={locationIcon} />
        <span className='card--country'>{country.toUpperCase()}</span>
        <span className='card--link'><a href={`${link}`} target='__blank'>View on Google Maps</a></span>
      </div>
      <h1>{name}</h1>
      <div className='card--dates'>
        <p>{dateIn} - {dateOut} </p>
      </div>
      <p className='card--review'>{review}</p>
    </div>
  );
}
